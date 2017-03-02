import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import JsonDB from 'node-json-db';
import uuid from 'uuid';
import _ from 'lodash';
const app = express();
const db = new JsonDB("db", true, false);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// API welcome message
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to our ES6 api!' });
});

// get all Todos
app.get('/api/todos', (req, res) => {
  const data = db.getData("/todos");
  res.json(data)
});

// create a Todo
app.post('/api/todos', (req, res) => {
  const id = uuid();
  const title = req.body.title;
  const project = req.body.project;
  const done = false;
  const createdAt = new Date();
  const modifiedAt = new Date();
  try {
    const path = "/todos/" + id;
    db.push(path, { id, title, project, done, createdAt, modifiedAt }, true);
    res.json({ message: 'Todo created successfully' })
  } catch (error) {
    console.log(error);
    res.json({ message: 'Error creating Todo' })
  }
});

// get a single Todo
app.get('/api/todo/:id', (req, res) => {
  const id = req.params.id;
  const path = "/todos/" + id;
  try {
    const todo = db.getData(path);
    res.json(todo);
  } catch (error) {
    res.status(404).json({ message: 'Todo not found' });
  }
});

// edit a Todo
app.put('/api/todo/:id', (req, res) => {
  const id = req.params.id;
  const path = "/todos/" + id;

  const { title, project, done } = req.body;
  try {
    const todo = db.getData(path);
    const modifiedAt = new Date();
    const updatedTodo = Object.assign({}, todo, {
      title: title || todo.title,
      project: project || todo.project,
      done: done || todo.done,
      modifiedAt
    });
    db.push(path, updatedTodo, true);
    res.json({ message: 'Todo successfully updated' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating Todo' });
  }
});

// delete a Todo
app.delete('/api/todo/:id', (req, res) => {
  const id = req.params.id;
  const path = "/todos/" + id;
  try {
    db.delete(path);
    res.json({ message: 'Todo successfully deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting Todo' });
  }
});

app.listen(8000);
console.log('App is running on PORT 8000.');

export default app;
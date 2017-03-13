// import React, { Component } from 'react';

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          "id": "b7bb6cfa-6e1b-4895-8198-4d5e080e5c0e",
          "title": "TodoX",
          "project": "ProjectX",
          "done": true,
          "createdAt": "2017-03-02T12:26:54.584Z",
          "modifiedAt": "2017-03-02T12:50:16.717Z"
        },
        {
          "id": "7ae5bfa3-f0d4-4fd3-8a9b-61676d67a3c8",
          "title": "Todo1",
          "project": "Project",
          "done": true,
          "createdAt": "2017-03-02T23:04:38.003Z",
          "modifiedAt": "2017-03-02T23:05:30.133Z"
        }
      ]
    }
  }

  render() {
    var pStyles = {
      textAlign: 'center',
      textDecoration: 'underline',
      fontSize: 'larger',
      fontWeight: 'bold',
      textTransform: 'uppercase'
    }
    return (
      <div>
        <nav>
          {/*<div className="nav-wrapper teal">
            <a href="#" className="brand-logo"><img style={{height: '60px', width: '60px' }}className="logo-img" src="/src/images/React-icon.svg" />Testing React Apps</a>
          </div>*/}
          <div className="nav-wrapper teal">
            <a href="#" className="brand-logo" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <img className="logo-img" src="/src/images/React-icon.svg" style={{height: '64px', width: '64px'}} />Testing React Apps
            </a>
            <ul className="right">
              <li><a><i className="material-icons tooltipped" style={{fontSize: '40px'}} data-position="bottom" data-delay="50" data-tooltip="Create Document">note_add</i></a></li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <div className="section section-title">
            <h5 className="white-text shadow">TODOS</h5>
          </div>
          <p className="tasks" style={pStyles}>Completed Tasks: {this.state.todos.filter(todo => {return todo.done === true}).length}</p>
          <p className="tasks" style={pStyles}>Pending Tasks: {this.state.todos.filter(todo => {return todo.done === false}).length}</p>
          <div className="row isotope" style={{position: 'relative'}}>
            {this.state.todos.map(todo => {
              return (
                <div className="col s12 m12 l4" style={{top: '0px'}} key={todo.id}>
                  <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                      <a href={'/docs/' + todo.id}>
                        <img width="320" height="240" src={"/src/images/image" + Math.ceil(Math.random() * 10) + ".jpg"} className=" wp-post-image" alt={todo.title} title={todo.title} /> </a>
                    </div>
                    <div className="card-content">
                      <a href={'/docs/' + todo._id}><p className="teal-text card-heading">{todo.title}</p></a>
                      <p className="genre-text">Project: {todo.project}</p>
                      <p>Status: {todo.done ? 'Complete' : 'Pending'}</p>
                      <p className="date-text">Created: {moment(todo.createdAt).fromNow()}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      isEditing: false
    }
    this.completeTodo = this.completeTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }

  completeTodo() {

  }

  deleteTodo() {

  }

  toggleForm() {

  }

  render() {
    return (
      <div className='ui centered card'>
        {this.state.isEditing
          ?
          <div className="content">
            <div className='ui form'>
              <div className='field'>
                <label>Title</label>
                <input type='text'/>
              </div>
              <div className='field'>
                <label>Project</label>
                <input type='text'/>
              </div>
              <div className='ui two button attached buttons'>
                <button className='ui basic blue button' onClick={this.toggleForm}>
                  Close X
                </button>
              </div>
            </div>
          </div>
          :
          <div className="content">
            <div className='header'>
                {this.props.todo.title }
            </div>
            <div className='meta'>
                { this.props.todo.project }
            </div>
            <div className='extra content'>
                <span className='right floated edit icon' onClick={this.toggleForm}>
                <i className='edit icon'></i>
              </span>
              <span className='right floated trash icon' onClick={this.deleteTodo}>
                <i className='trash icon'></i>
              </span>
            </div>
          </div>
        }
        {(!this.state.isEditing && this.props.todo.done) &&
          <div className='ui bottom attached green basic button' disabled>
            Completed
          </div>
        }
        {(!this.state.isEditing && !this.props.todo.done) &&
          <div className='ui bottom attached red basic button' onClick={this.completeTodo}>
              Pending
          </div>
        }
      </div>
    )
  }
}

ReactDOM.render(<TodoList />, document.getElementById('content'));

// export default TodoList
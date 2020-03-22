import React from 'react';
import './App.css'
import todos from './data.js'
import TodoItem from './components/TodoItem'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: todos
    }
  }
  addTodo() {
    
  }

  render() {
    console.log(`Todos are: `, this.state.todos);
    return(
      <div className="container">
          <button className="button btn btn-primary btn-lg todo">Todo + </button>
        {
          // Map over todos array and pass each todo into the
          // TodoItem
          this.state.todos.map((todo) => {
            return (
              <TodoItem
                key={todo._id}
                todo={todo}
              />
            )
          })
        }
      </div>
    )
  }
}

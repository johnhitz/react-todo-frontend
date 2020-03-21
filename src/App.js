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
    // this.getData = this.getData.bind(this)
  }
// componentDidMount() {
//   this.getData()
// }
//
// getData() {
//   this.setState({ todos: dataArr})
// }
  render() {
    console.log(`Todos are: `, this.state.todos);
    return(
      <div className="container">
        <h1>Todo</h1>
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

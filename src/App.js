import React from 'react';
import TodoItem from './components/TodoItem'
import {dataArr} from './dataArr.js'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: dataArr
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

    return(
      <div className="container">
        <h1>Todo</h1>
        {
          this.state.todos.map((todo, i) => {
            console.log(`App Todo: `, todo.item, i);
            return (
              <ul>
                <TodoItem
                  key={this.state.todos.id}
                  index={i}
                  todo={todo}
                />
              </ul>
            )
          })
        }

        <TodoItem />
      </div>
    )
  }
}

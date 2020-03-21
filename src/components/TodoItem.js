import React from 'react'
import Description from './Description'

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showItem: true
    }
  }

  hideItem(item){
    this.setState({ showItem: false})
  }
  render() {
    const { todo = [] } = this.props
    return (
      <> {/* See React.Fragment: https://reactjs.org/docs/fragments.html */}
        <li>
          {this.props.todo.item}
          <div className="button-group">
            <button className="btn btn-primary btn-sm">Edit</button>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => {
                this.hideItem(this.props.item)
              }}>Hide Item</button>
            <button className="btn btn-primary btn-sm">Delete</button>
          </div>
          <Description
            todo={this.props.todo}
          />
        </li>
      </>
    )
  }
}

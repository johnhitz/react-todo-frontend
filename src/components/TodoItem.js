import React from 'react'

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
      <div>
        <li
        >{this.props.todo.item}
          <div className="button-group">
            <button className="btn btn-primary">Edit</button>
            <button
              className="btn btn-primary"
              onClick={() => {
                this.hideItem(this.props.item)
              }}>Hide Item</button>
            <button className="btn btn-primary">Delete</button>
          </div>
        </li>
      </div>
    )
  }
}

import React from 'react'

export default class Description extends React.Component {
  render() {
    return(
      <pre>{this.props.todo.description}</pre>
    )
  }
}

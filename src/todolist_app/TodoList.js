import { Component } from "react";

class TodoList extends Component {
  render() {
    return (
      <ol>
        {this.props.items.map((item) => 
          <li>{item}</li>
        )}
      </ol>
    );
  }
}

export default TodoList;

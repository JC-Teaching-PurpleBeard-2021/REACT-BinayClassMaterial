import { Component } from "react";
import AddEmployeeForm from "./AddEmployeeForm";
import Table from "./Table";
import Timer from "./timerapp/Timer";
import TodoApp from "./todolist_app/TodoApp";
import './App.css'
import Theme from "./themeapp/Theme";
import ModernTodo from "./modenTodoApp/modernToDoApp/ModernTodo";

class App extends Component {
  tableData = [
    {
      name: "Zi",
      profession: "Developer",
    },
    {
      name: "Dimple",
      profession: "CEO",
    },
    {
      name: "Binay",
      profession: "Trainer",
    },
  ];

  state = {
    tableData: this.tableData,
  };

  handleDeleteOnClick = (index) => {
    this.setState({
      tableData: this.state.tableData.filter((emp, i) => i !== index),
    });
  };

  handleFormOnSubmit = (emp, e) => {
    this.setState({ tableData: [...this.state.tableData, emp] });
  };

  render() {
    return (
      <div>
        <h1>Switch Theme:</h1>
        <Theme/>
        <h1>Table operation Application</h1>
        <Table
          td={this.state.tableData}
          handleDeleteOnClick={this.handleDeleteOnClick}
        />
        <AddEmployeeForm handleFormOnSubmit={this.handleFormOnSubmit} />
        <br/>
        <h1>Timer App</h1>
        <Timer/>
        <br/>
        <h1>ToDo List App</h1>
        <TodoApp/>
        <h1>Feature Rich ToDo App</h1>
        <ModernTodo/>
      </div>
    );
  }
}

export default App;

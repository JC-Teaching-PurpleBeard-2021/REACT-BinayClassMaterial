import { Component } from "react";

class AddEmployeeForm extends Component {
  state = {
    name: "",
    profession: "",
  };
  handleNameForm = (e) => {
    this.setState({ ...this.state, name: e.target.value });
  };
  handleProfessionForm = (e) => {
    this.setState({ ...this.state, profession: e.target.value });
  };
  render() {
    return (
      <>
        <label>Name</label>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleNameForm}
        />
        <label>Profession</label>
        <input
          value={this.state.profession}
          onChange={this.handleProfessionForm}
        />
        <button
          onClick={(event) => {
            this.props.handleFormOnSubmit(this.state);
          }}
        >
          Submit
        </button>
      </>
    );
  }
}

export default AddEmployeeForm;

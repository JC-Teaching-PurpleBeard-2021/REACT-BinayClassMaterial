import { Component } from 'react';
import TodoList from './TodoList';

class TodoApp extends Component {
	state = {
		currentItem: '',
		items: [],
	};

	handleOnChange = (event) => {
		this.setState({
			currentItem: event.target.value,
		});
	};

	handleNewItemSubmit = (event) => {
		event.preventDefault();
		if (this.state.currentItem.trim().length === 0) return;
		this.setState({ items: this.state.items.concat(this.state.currentItem) });
		this.setState({ currentItem: '' });
	};

	render() {
		return (
			<div className='content__child-app'>
				<h1>ToDo List App</h1>
				<form onSubmit={this.handleNewItemSubmit}>
					<label>What do you wanna do next? Put it here!</label>
					<br />
					<input value={this.state.currentItem} onChange={this.handleOnChange} />
					<br />
					<button>Add item #{this.state.items.length + 1}</button>
				</form>
				<TodoList items={this.state.items} />
			</div>
		);
	}
}

export default TodoApp;

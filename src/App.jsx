import { Component } from 'react';
import AddEmployeeForm from './Employees/AddEmployeeForm';
import Table from './Employees/Table';
import Timer from './timerapp/Timer';
import TodoApp from './todolist_app/TodoApp';
import './App.scss';
import Theme from './themeapp/Theme';
import ModernTodo from './modenTodoApp/ModernTodo';
import SideNav from './common/SideNav';
import Home from './common/Home';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
	tableData = [
		{
			name: 'Zi',
			profession: 'Developer',
		},
		{
			name: 'Dimple',
			profession: 'CEO',
		},
		{
			name: 'Binay',
			profession: 'Trainer',
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
			<Router>
				<div className='app-container'>
					<SideNav />
					<Route exact path='/'>
						<Home />
					</Route>

					<Route path='/theme'>
						<Theme />
					</Route>

					<Route path='/timer'>
						<Timer />
					</Route>

					<Route path='/todo'>
						<TodoApp />
					</Route>

					<Route path='/moderntodo'>
						<ModernTodo />
					</Route>

					<Route path='/employeeform'>
						<Table td={this.state.tableData} handleDeleteOnClick={this.handleDeleteOnClick} />
						<AddEmployeeForm handleFormOnSubmit={this.handleFormOnSubmit} />
					</Route>
				</div>
			</Router>
		);
	}
}

export default App;

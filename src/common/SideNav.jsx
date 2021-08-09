import { Link } from 'react-router-dom';

const SideNav = () => {
	return (
		<nav className='sidenav'>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/theme'>Theme</Link>
				</li>
				<li>
					<Link to='/timer'>Timer</Link>
				</li>
				<li>
					<Link to='/todo'>Todo</Link>
				</li>
				<li>
					<Link to='/moderntodo'>Modern Todo</Link>
				</li>
				<li>
					<Link to='/employeeform'>Table Application</Link>
				</li>
			</ul>
		</nav>
	);
};

export default SideNav;

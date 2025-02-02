import { useEffect, useState } from 'react';
import './Theme.scss';

export default function Theme() {
	const [theme, settheme] = useState('white');
	useEffect(() => {
		if (theme === 'black') {
			document.getElementsByTagName('BODY')[0].classList.remove('whitetheme');
			document.getElementsByTagName('BODY')[0].classList.add('blacktheme');
		} else {
			document.getElementsByTagName('BODY')[0].classList.remove('blacktheme');
			document.getElementsByTagName('BODY')[0].classList.add('whitetheme');
		}
	});
	return (
		<div className='content__child-app'>
			<h1>Switch Theme:</h1>
			<button
				onClick={() => {
					if (theme === 'white') settheme('black');
					else settheme('white');
				}}
			>
				Switch Theme
			</button>
		</div>
	);
}

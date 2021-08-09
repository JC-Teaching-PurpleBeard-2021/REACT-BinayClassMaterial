// this is created using RECAT HOOKS
// Takes it from 'component' OOP to functional programming
import { useState, useEffect } from 'react';

export default function Timer() {
	const [seconds, setSeconds] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setSeconds(seconds + 1);
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	});
	return (
		<div className='content__child-app'>
			<h1>Timer App</h1>
			Seconds Elapsed: {seconds}
		</div>
	);
}

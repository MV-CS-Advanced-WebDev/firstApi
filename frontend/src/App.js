import { useState, useEffect } from 'react';
import './App.css';

function App() {
	const [names, setNames] = useState('');
	const [counter, setCounter] = useState(0);
	useEffect(() => {
		fetch('http://localhost:8000/names').then(
			res => res.json()
		).then(
			data => {
				setNames(data);
			}
		);
	}, [counter]);
	const addCounter = () => {
		setCounter(count => count + 1);
	}
	const removeCounter = () => {
		setCounter(count => count - 1);
	}
  return (
    <div className="App">
			<div className="counter">
				<button onClick={addCounter}>add</button>
				<div className="num">{counter}</div>
				<button onClick={removeCounter}>remove</button>
			</div>
			{names}
    </div>
  );
}

export default App;

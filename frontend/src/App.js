import { useState, useEffect } from 'react';
import './App.css';

function App() {
	const [names, setNames] = useState('');  ///sets the default value of the api call to an empty string
	const [counter, setCounter] = useState(0); ///sets the default value of the counter to 0
	useEffect(() => { ///useEffect is a hook that runs after the component mounts (when the component is rendered on ther page(when the code loads))
		fetch('http://localhost:8000/names').then( //fetch the api call 
			res => res.json() //and then make it into JSON(look it up)
		).then(
			data => {
				setNames(data); //set the state of the names to the data
			}
		);
	}, [counter]); //Use the counter to trigger the api call everytime the counter changes the useEffect will run

	//function to increment the counter
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
			{names} {/*this is the api call data*/}
    </div>
  );
}

export default App;

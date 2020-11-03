import React, { useState } from 'react';
import CounterDisplay from './CounterDisplay';
import './App.css';

const initialCount = 0;
function App() {
	const [count, setCount] = useState(initialCount);
	const reset = () => setCount(initialCount);
	const decrement = () => setCount((prevCount) => prevCount - 1);
	const increment = () => setCount((prevCount) => prevCount + 1);
	return (
		<div className="App">
			<CounterDisplay
				count={count}
				reset={reset}
				decrement={decrement}
				increment={increment}
			/>
		</div>
	);
}

export default App;

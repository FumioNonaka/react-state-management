import React, { createContext, useState } from 'react';
import CounterDisplay from './CounterDisplay';
import './App.css';

const initialCount = 0;
export const AppContext = createContext(initialCount);
function App() {
	const [count, setCount] = useState(initialCount);
	const reset = () => setCount(initialCount);
	const decrement = () => setCount((prevCount) => prevCount - 1);
	const increment = () => setCount((prevCount) => prevCount + 1);
	return (
		<AppContext.Provider value={{ count, reset, decrement, increment }}>
			<div className="App">
				<CounterDisplay />
			</div>
		</AppContext.Provider>
	);
}

export default App;

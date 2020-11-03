import React, { useContext } from 'react';
import { AppContext } from './AppContext';

const CounterDisplay = () => {
	const { count, reset, decrement, increment } = useContext(AppContext);
	return (
		<>
			Count: {count}
			<button onClick={reset}>Reset</button>
			<button onClick={decrement}>-</button>
			<button onClick={increment}>+</button>
		</>
	);
};

export default CounterDisplay;

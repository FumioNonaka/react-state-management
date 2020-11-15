import React from 'react';
import { useCounter } from './useCounter';

const CounterDisplay = () => {
	const { count, reset, decrement, increment } = useCounter();
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

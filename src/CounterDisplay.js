import React from 'react';
import { CounterContainer } from './CounterContainer';

const CounterDisplay = () => {
	const { count, reset, decrement, increment } = CounterContainer.useContainer();
	return (
		<>
			Count: {count}
			<button onClick={reset}>Reset</button>
			<button onClick={decrement}>-</button>
			<button onClick={increment}>+</button>
		</>
	);
}

export default CounterDisplay;

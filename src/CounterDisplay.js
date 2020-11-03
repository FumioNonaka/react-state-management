import React from 'react';

const CounterDisplay = ({ count, reset, decrement, increment }) => {
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

import React, { useState } from 'react';

const CounterDisplay = ({ initialCount = 0 }) => {
	const [count, setCount] = useState(initialCount);
	return (
		<>
			Count: {count}
			<button onClick={() => setCount(initialCount)}>Reset</button>
			<button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
			<button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
		</>
	);
};

export default CounterDisplay;

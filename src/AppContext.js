import React, { createContext, useState } from 'react';

const initialCount = 0;
export const AppContext = createContext(initialCount);
export const AppProvider = ({ children }) => {
	const [count, setCount] = useState(initialCount);
	const reset = () => setCount(initialCount);
	const decrement = () => setCount((prevCount) => prevCount - 1);
	const increment = () => setCount((prevCount) => prevCount + 1);
	return (
		<AppContext.Provider value={{ count, reset, decrement, increment }}>
			{children}
		</AppContext.Provider>
	);
};

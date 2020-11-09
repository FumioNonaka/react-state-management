import React, { createContext, useReducer } from 'react';
import reducer from './reducder';

const initialCount = 0;
export const AppContext = createContext(initialCount);
export const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, { count: initialCount });
	const reset = () => dispatch({ type: 'reset' });
	const decrement = () => dispatch({ type: 'decrement' });
	const increment = () => dispatch({ type: 'increment' });
	return (
		<AppContext.Provider value={{ count: state.count, reset, decrement, increment }}>
			{children}
		</AppContext.Provider>
	);
};

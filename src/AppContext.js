import React, { createContext, useCallback, useReducer } from 'react';
import reducer from './reducder';

const initialCount = 0;
export const AppContext = createContext({ count: initialCount });
export const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, { count: initialCount });
	const reset = useCallback(() => dispatch({ type: 'reset' }), []);
	const decrement = useCallback(() => dispatch({ type: 'decrement' }), []);
	const increment = useCallback(() => dispatch({ type: 'increment' }), []);
	return (
		<AppContext.Provider value={{ count: state.count, reset, decrement, increment }}>
			{children}
		</AppContext.Provider>
	);
};

import { useCallback, useReducer } from 'react';
import reducer from './reducder';

const initialCount = 0;
export const useCounter = () => {
	const [state, dispatch] = useReducer(reducer, { count: initialCount });
	const reset = useCallback(() => dispatch({ type: 'reset' }), []);
	const decrement = useCallback(() => dispatch({ type: 'decrement' }), []);
	const increment = useCallback(() => dispatch({ type: 'increment' }), []);
	return { count: state.count, reset, decrement, increment };
};

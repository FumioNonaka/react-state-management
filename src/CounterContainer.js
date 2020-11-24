import { useCallback, useEffect } from 'react';
import { createContainer } from 'unstated-next';
import reducer from './reducer'

const useCounter = (initialCount = 0) => {
	const { count, dispatch } = reducer.useContainer(reducer);
	const reset = useCallback(() => dispatch({ type: 'reset' }), [dispatch]);
	const decrement = useCallback(() => dispatch({ type: 'decrement' }), [dispatch]);
	const increment = useCallback(() => dispatch({ type: 'increment' }), [dispatch]);
	useEffect(() => {
		console.log('reducer:', initialCount);
	}, []);
	return { count, reset, decrement, increment };
};
export const CounterContainer = createContainer(useCounter);

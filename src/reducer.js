import { useReducer } from 'react';
import { createContainer } from 'unstated-next';

const reducer = (state, action) => {
	switch (action.type) {
		case 'reset':
			return { count: 0 };
		case 'decrement':
			return { count: state.count - 1 };
		case 'increment':
			return { count: state.count + 1 };
		default:
			console.error('error');
	}
};
const initialState = { count: 0 };
const useCounterReducer = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return {
		dispatch,
		count: state.count
	};
}

export default createContainer(() => useCounterReducer());
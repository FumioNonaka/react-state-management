import React from 'react';
import { CounterContainer } from './CounterContainer';
import reducer from './reducer';
import CounterDisplay from './CounterDisplay';
import './App.css';

function App() {
	return (
		<reducer.Provider>
			<CounterContainer.Provider initialCount={10}>
				<div className="App">
					<CounterDisplay />
				</div>
			</CounterContainer.Provider>
		</reducer.Provider>
	);
}

export default App;

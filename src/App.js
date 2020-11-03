import React from 'react';
import { AppProvider } from './AppContext';
import CounterDisplay from './CounterDisplay';
import './App.css';

function App() {
	return (
		<AppProvider>
			<div className="App">
				<CounterDisplay />
			</div>
		</AppProvider>
	);
}

export default App;

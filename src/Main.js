import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components
import Home from './components/Home';
import Terms from './components/Terms';

function Main() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact>
					<Home />
				</Route>
				<Route path='/terms'>
					<Terms />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default Main;

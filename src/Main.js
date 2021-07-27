import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components
import Page from './components/Page';
import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';
import Terms from './components/Terms';

function Main() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact>
					<Page title='Main'>
						<div className='container'>
							<Header />
							<Form />
						</div>
						<Footer />
					</Page>
				</Route>
				<Route path='/terms'>
					<Terms />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default Main;

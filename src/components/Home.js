import React from 'react';
import Page from './Page';
import Header from './Header';
import Form from './Form';
import Footer from './Footer';

function Home() {
	const nameValidation = (fieldName, fieldValue) => {
		if (fieldValue.trim() === '') {
			return `${fieldName} cannot be empty`;
		}
		return null;
	};

	const emailValidation = email => {
		if (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
			return null;
		}
		if (email.trim() === '') {
			return 'Email cannot be empty';
		}
		return 'Looks like this is not an email';
	};

	const passwordValidation = password => {
		if (password.trim() === '') {
			return 'Password cannot be empty';
		}
		return null;
	};

	const validate = {
		firstName: name => nameValidation('First Name', name),
		lastName: name => nameValidation('Last Name', name),
		email: emailValidation,
		password: passwordValidation,
	};

	const initialValues = {
		firstName: '',
		lastName: '',
		email: '',
		password: '',
	};

	return (
		<Page title='Main'>
			<div className='container'>
				<Header />
				<Form validate={validate} initialValues={initialValues} />
			</div>
			<Footer />
		</Page>
	);
}

export default Home;

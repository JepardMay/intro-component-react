import React from 'react';
import { Link } from 'react-router-dom';
import Confetti from 'react-confetti';
import { auth } from '../firebase';

import Input from './Input';
import Button from './Button';
import Message from './Message';

function Form({ initialValues, validate }) {
	const inputs = [
		{ name: 'First Name', id: 'firstName' },
		{ name: 'Last Name', id: 'lastName' },
		{ name: 'Email Address', id: 'email', type: 'email' },
		{ name: 'Password', id: 'password', type: 'password' },
	];

	const [subscription, setSubscription] = React.useState(false);

	const [loading, setLoading] = React.useState(false);

	const [values, setValues] = React.useState(initialValues);

	const [errors, setErrors] = React.useState({});

	const [touched, setTouched] = React.useState({});

	const [message, setMessage] = React.useState('');

	const handleChange = evt => {
		const { name, value } = evt.target;

		// save field values
		setValues({
			...values,
			[name]: value,
		});

		// was the field modified
		setTouched({
			...touched,
			[name]: true,
		});
	};

	const handleBlur = evt => {
		setMessage('');

		const { name, value } = evt.target;

		// remove whatever error was there previously
		const { [name]: removedError, ...rest } = errors;

		// check for a new error
		const error = validate[name](value);

		// validate the field if the value has been touched
		setErrors({
			...rest,
			...(error && { [name]: touched[name] && error }),
		});
	};

	const handleSubmit = evt => {
		evt.preventDefault();

		// validate the form
		const formValidation = Object.keys(values).reduce(
			(acc, key) => {
				const newError = validate[key](values[key]);
				const newTouched = { [key]: true };
				return {
					errors: {
						...acc.errors,
						...(newError && { [key]: newError }),
					},
					touched: {
						...acc.touched,
						...newTouched,
					},
				};
			},
			{
				errors: { ...errors },
				touched: { ...touched },
			},
		);
		setErrors(formValidation.errors);
		setTouched(formValidation.touched);

		// show success message if no errors
		if (
			Object.keys(formValidation.errors).length === 0 &&
			Object.values(formValidation.touched).every(value => value)
		) {
			setLoading(true);
			auth
				.createUserWithEmailAndPassword(values.email, values.password)
				.then(user => {
					setTimeout(() => {
						setLoading(false);
						setSubscription(true);
					}, 2000);
				})
				.catch(err => {
					console.log(err);
					setMessage(err.message);
					setLoading(false);
				});
		}
	};

	return (
		<section className='column'>
			{loading ? (
				<div className='block block--centered'>
					<div className='lds-dual-ring'></div>
				</div>
			) : subscription ? (
				<>
					<div className='block block--centered'>
						<Confetti
							width={window.innerWidth}
							height={window.innerHeight}
							numberOfPieces='40'
							run='false'
						/>
						<h2 className='title title--dark'>
							Congrats, {values.firstName} {values.lastName}!
						</h2>
						<p className='text text--dark'>You're all set up</p>
						<Button
							text='Go back to form'
							handleClick={() => {
								setSubscription(false);
								setValues(initialValues);
							}}
						/>
					</div>
				</>
			) : (
				<>
					<h2 className='visually-hidden'>Subscribe for trial</h2>
					<p className='promo'>
						<b className='bold'>Try it free 7 days</b>&nbsp;then $20/mo. thereafter
					</p>
					<div className='block'>
						{message !== '' && <Message message={message} />}
						<form onSubmit={handleSubmit}>
							<ul className='form-list'>
								{inputs.map((input, i) => (
									<Input
										name={input.name}
										type={input.type}
										id={input.id}
										key={i}
										handleBlur={handleBlur}
										handleChange={handleChange}
										errors={errors}
										touched={touched}
										values={values}
									/>
								))}
								<li>
									<Button text='Claim your free trial' type='submit' />
								</li>
							</ul>
						</form>
						<p className='terms'>
							By clicking the button, you are agreeing to our{' '}
							<Link to='/terms' className='link'>
								Terms and Services
							</Link>
						</p>
					</div>
				</>
			)}
		</section>
	);
}

export default Form;

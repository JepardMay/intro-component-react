import React from 'react';
import { Link } from 'react-router-dom';
import Input from './Input';
import Button from './Button';

function Form({ initialValues, validate }) {
	const inputs = [
		{ name: 'First Name', id: 'firstName' },
		{ name: 'Last Name', id: 'lastName' },
		{ name: 'Email Address', id: 'email', type: 'email' },
		{ name: 'Password', id: 'password', type: 'password' },
	];

	const [values, setValues] = React.useState(initialValues);

	const [errors, setErrors] = React.useState({});

	const [touched, setTouched] = React.useState({});

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
		const { name, value } = evt.target;

		// remove whatever error was there previously
		const { [name]: removedError, ...rest } = errors;

		// check for a new error
		const error = validate[name](value);

		// // validate the field if the value has been touched
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
	};

	return (
		<section className='block'>
			<h2 className='visually-hidden'>Subscribe for trial</h2>
			<p className='promo'>
				<b className='bold'>Try it free 7 days</b>&nbsp;then $20/mo. thereafter
			</p>
			<div className='form-block'>
				<form onSubmit={handleSubmit} autoComplete='off'>
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
		</section>
	);
}

export default Form;

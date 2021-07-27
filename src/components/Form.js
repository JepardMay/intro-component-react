import React from 'react';
import { Link } from 'react-router-dom';
import Input from './Input';
import Button from './Button';
import { v4 as uuidv4 } from 'uuid';

function Form() {
	const inputs = [
		{ name: 'First Name', id: 'user-firstname' },
		{ name: 'Last Name', id: 'user-lastname' },
		{ name: 'Email Address', id: 'user-email', type: 'email' },
		{ name: 'Password', id: 'user-password', type: 'password' },
	];
	const key = uuidv4();

	return (
		<section className='block'>
			<h2 className='visually-hidden'>Subscribe for trial</h2>
			<p className='promo'>
				<b className='bold'>Try it free 7 days</b>&nbsp;then $20/mo. thereafter
			</p>
			<div className='form-block'>
				<form action='#' method='post'>
					<ul className='form-list'>
						{inputs.map((input, i) => (
							<Input name={input.name} type={input.type} key={i + key} />
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

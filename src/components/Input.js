import React from 'react';

function Input(props) {
	const { name, type, id, handleChange, handleBlur, values, touched, errors } = props;

	return (
		<li className={touched[id] && errors[id] ? 'input-group input-group--error' : 'input-group'}>
			<label htmlFor={id} className='visually-hidden'>
				{name}
			</label>
			<input
				name={id}
				type={type ? type : 'text'}
				placeholder={name}
				onChange={handleChange}
				onBlur={handleBlur}
				value={values[id]}
			/>
			<span className='error-msg'>{touched[id] && errors[id]}</span>
			<span className='error-icon'>
				<svg width='24' height='24' xmlns='http://www.w3.org/2000/svg'>
					<g fill='none' fillRule='evenodd'>
						<circle fill='#FF7979' cx='12' cy='12' r='12' />
						<rect fill='#FFF' x='11' y='6' width='2' height='9' rx='1' />
						<rect fill='#FFF' x='11' y='17' width='2' height='2' rx='1' />
					</g>
				</svg>
			</span>
		</li>
	);
}

export default Input;

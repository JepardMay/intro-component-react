import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function Input(props) {
	const { name, type, id } = props;
	const key = uuidv4();

	return (
		<li className='input-group' key={key}>
			<label htmlFor={id} className='visually-hidden'>
				{name}
			</label>
			<input id={id} type={type ? type : 'text'} placeholder={name} required />
			<span className='error-msg'></span>
			<span className='error-icon'>
				<svg width='24' height='24' xmlns='http://www.w3.org/2000/svg'>
					<g fill='none' fill-rule='evenodd'>
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

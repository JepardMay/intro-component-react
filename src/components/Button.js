import React from 'react';

function Button(props) {
	const { text, type } = props;

	return (
		<button className='btn' type={type ? type : 'button'}>
			{text}
		</button>
	);
}

export default Button;

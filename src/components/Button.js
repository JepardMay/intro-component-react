import React from 'react';

function Button(props) {
	const { text, type, handleClick } = props;

	return (
		<button className='btn' type={type ? type : 'button'} onClick={handleClick}>
			{text}
		</button>
	);
}

export default Button;

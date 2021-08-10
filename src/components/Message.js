import React from 'react';

function Message({ message }) {
	return (
		<div className='error-block'>
			<p className='error-msg'>{message}</p>
			<span className='error-icon'>
				<svg width='24' height='24' xmlns='http://www.w3.org/2000/svg'>
					<g fill='none' fillRule='evenodd'>
						<circle fill='#FF7979' cx='12' cy='12' r='12' />
						<rect fill='#FFF' x='11' y='6' width='2' height='9' rx='1' />
						<rect fill='#FFF' x='11' y='17' width='2' height='2' rx='1' />
					</g>
				</svg>
			</span>
		</div>
	);
}

export default Message;

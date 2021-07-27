import React, { useEffect } from 'react';
import Wrapper from './Wrapper';

function Page(props) {
	useEffect(() => {
		document.title = `${props.title} | Intro Component`;
		window.scrollTo(0, 0);
	}, [props.title]);

	return <Wrapper>{props.children}</Wrapper>;
}

export default Page;

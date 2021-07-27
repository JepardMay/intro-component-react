import React from 'react';
import { Link } from 'react-router-dom';
import Page from './Page';

function Terms() {
	return (
		<Page title='Terms'>
			<div className='container container--narrow'>
				<Link to='/' className='link link--dark go-back'>
					Back
				</Link>
				<section className='block'>
					<h2 className='title'>Terms and Services</h2>
					<p className='text'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit nam, minima magni
						magnam, molestiae natus nesciunt numquam beatae, officiis sint praesentium veniam libero
						blanditiis. Dolores deserunt praesentium sed ab aut quidem at minima sapiente.
					</p>
					<p className='text'>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur totam eos ipsam
						aspernatur ipsa. Deserunt odit quis consequuntur. Adipisci, pariatur at distinctio rerum
						aliquam beatae recusandae ipsa maxime doloribus quae exercitationem et assumenda illo
						aperiam quam quas nisi nostrum. Accusamus incidunt, quo minus itaque nesciunt veritatis!
						Quam laborum sunt a nobis, facilis beatae. Aliquid quidem explicabo quas placeat
						accusantium omnis voluptatum eaque ea est beatae. Excepturi vitae molestias fugiat.
					</p>
					<p className='text'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum doloremque, eum ipsum
						aliquam perspiciatis quas ut qui in harum. Eius illo impedit, ipsum aliquam autem,
						reiciendis explicabo voluptate assumenda accusantium corrupti blanditiis nobis animi
						necessitatibus a rem cum voluptatem iure. Soluta reprehenderit impedit ullam neque optio
						excepturi itaque obcaecati, necessitatibus, magnam culpa consequuntur amet!
					</p>
				</section>
			</div>
		</Page>
	);
}

export default Terms;

import React from 'react';
import './footer.css';
import { BsMouse } from 'react-icons/bs';

function Footer() {
	return (
		<div id='footer' className='container footer-container'>
			<h3>
				That&apos;s all{' '}
				<a href='#home' className='backTop'>
					<h4>
						<BsMouse /> - scroll up -
					</h4>
				</a>
			</h3>
		</div>
	);
}
export default Footer;

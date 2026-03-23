import React from 'react';
import './header.css';
import { BsMouse } from 'react-icons/bs';

function Header() {
	return (
		<div id='home' className='container header-container'>
			<div className='title-container'>
				<h1>
					<p>
						I<span>&apos;</span>m
					</p>
					Agus
				</h1>
				<h2>Full-Stack Web Developer</h2>
			</div>

			<div className='logo'></div>

			<div className='scroll-down'>
				<hr />
				<h5>scroll down</h5>
				<BsMouse className='scroll' />
				<hr />
			</div>
		</div>
	);
}
export default Header;

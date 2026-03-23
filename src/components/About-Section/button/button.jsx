import React from 'react';
import './button.css';

function Buttons() {
	return (
		<div className='container button-container'>
			<a
				href='https://drive.google.com/drive/folders/1jszepNC9_4XpDd689gwKLDVRXHPVBdNb?usp=sharing'
				rel='noreferrer'
				className='btn pri'
				target='_blank'>
				Download CV
			</a>
			<a href='#contact' className='btn sec'>
				Get in Touch
			</a>
		</div>
	);
}

export default Buttons;

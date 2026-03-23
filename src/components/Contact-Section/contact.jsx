import React from 'react';
import './contact.css';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';

function Contact() {
	return (
		<div id='contact' className='container contact-container'>
			<h2>Contact Me</h2>
			<div className='contact-links'>
				<a
					href='https://www.linkedin.com/in/agus-aguilar-b24a151a8/'
					rel='noreferrer'
					className='contact youtube'
					target='_blank'>
					<AiOutlineLinkedin className='icon' />
					<h4>
						LinkedIn <span>Agus Aguilar</span>
					</h4>
				</a>

				<a href='mailto: agus.dev.ar@gmail.com' className='contact mail'>
					<AiOutlineMail className='icon' />
					<h4>
						Email <span>agus.dev.ar@gmail.com</span>
					</h4>
				</a>
			</div>
		</div>
	);
}

export default Contact;

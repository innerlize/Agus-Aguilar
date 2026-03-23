import React from 'react';
import { motion } from 'framer-motion';
import './timeline-item.css';

const TimelineItem = ({ work, index }) => {
	const isLeft = index % 2 === 0;

	return (
		<div className={`timeline-item ${isLeft ? 'left' : 'right'}`}>
			<motion.div
				className='timeline-dot'
				initial={{ scale: 0 }}
				whileInView={{ scale: 1 }}
				viewport={{ once: true, amount: 0.5 }}
				transition={{ type: 'spring', stiffness: 300, damping: 20 }}
			/>

			<motion.span
				className='timeline-period'
				initial={{ opacity: 0, y: -10 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.3 }}
			>
				{work.period}
			</motion.span>

			<motion.div
				className='timeline-card'
				initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.5, ease: 'easeOut' }}
			>
				<h3 className='card-company'>{work.company}</h3>
				<h4 className='card-role'>{work.role}</h4>
				<ul className='card-description'>
					{work.description.map((item, i) => (
						<li key={i}>{item}</li>
					))}
				</ul>

				<div className='tools-list'>
					{work.tools.map(tool => (
						<span key={tool} className='tool-pill'>
							{tool}
						</span>
					))}
				</div>
			</motion.div>
		</div>
	);
};

export default TimelineItem;

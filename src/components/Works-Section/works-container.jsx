import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import worksDB from '../../databases/worksDB.js';
import TimelineItem from './timeline-item/timeline-item.jsx';
// import PersonalProjects from './personal-projects/personal-projects.jsx';
import './works-container.css';

const Works = () => {
	const timelineRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: timelineRef,
		offset: ['start 80%', 'end 50%']
	});

	const scaleY = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001
	});

	return (
		<section id='works'>
			<div className='works-container'>
				<h2 className='work-txt'>Work Experience</h2>

				<div className='timeline' ref={timelineRef}>
					<motion.div className='timeline-line' style={{ scaleY }} />
					{worksDB.map((work, i) => (
						<TimelineItem key={work.company} work={work} index={i} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Works;

import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import worksDB from '../../databases/worksDB.js';
import TimelineItem from './timeline-item/timeline-item.jsx';
// import PersonalProjects from './personal-projects/personal-projects.jsx';
import './works-container.css';

const Works = () => {
	return (
		<section id='works'>
			<div className='works-container'>
				<h2 className='work-txt'>Work Experience</h2>

				<VerticalTimeline lineColor='linear-gradient(to bottom, var(--color-pri), var(--color-sec))'>
					{worksDB.map((work, i) => (
						<TimelineItem key={work.company} work={work} index={i} />
					))}
				</VerticalTimeline>
			</div>

			{/* <PersonalProjects /> */}
		</section>
	);
};

export default Works;

import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import './timeline-item.css';

const TimelineItem = ({ work }) => {
	return (
		<VerticalTimelineElement
			contentStyle={{
				background: 'rgba(0, 0, 0, 0.116)',
				backdropFilter: 'blur(20px)',
				borderRadius: '25px',
				border: '1px solid rgba(255, 255, 255, 0.05)',
				boxShadow: 'none',
				padding: '25px 30px'
			}}
			contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.05)' }}
			date={work.period}
			iconStyle={{
				background: 'rgb(10, 10, 10)',
				border: '3px solid var(--color-pri)',
				boxShadow: 'none'
			}}
			dateClassName='timeline-date'
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
		</VerticalTimelineElement>
	);
};

export default TimelineItem;

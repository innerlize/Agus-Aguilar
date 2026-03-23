import React, { useState, useRef, useEffect, useCallback } from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import './timeline-item.css';

const GAP = 8;
const MAX_ROWS = 2;

const TimelineItem = ({ work }) => {
	const [expanded, setExpanded] = useState(false);
	const [splitIndex, setSplitIndex] = useState(work.tools.length);
	const visibleRef = useRef(null);

	const measure = useCallback(() => {
		const el = visibleRef.current;
		if (!el) return;

		const pills = el.querySelectorAll('.tool-pill');
		if (pills.length === 0) return;

		const pillHeight = pills[0].offsetHeight;
		const maxHeight = pillHeight * MAX_ROWS + GAP * (MAX_ROWS - 1);
		const containerTop = el.getBoundingClientRect().top;

		let idx = pills.length;
		for (let i = 0; i < pills.length; i++) {
			const pillTop = pills[i].getBoundingClientRect().top - containerTop;
			if (pillTop + pillHeight > maxHeight + 1) {
				idx = i;
				break;
			}
		}
		setSplitIndex(idx);
	}, [work.tools]);

	useEffect(() => {
		setSplitIndex(work.tools.length);
	}, [work.tools]);

	useEffect(() => {
		if (splitIndex === work.tools.length) {
			requestAnimationFrame(measure);
		}
	}, [splitIndex, work.tools.length, measure]);

	const visibleTools = work.tools.slice(0, splitIndex);
	const hiddenTools = work.tools.slice(splitIndex);
	const hasMore = hiddenTools.length > 0;

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
			contentArrowStyle={{ display: 'none' }}
			date={work.period}
			iconStyle={{
				background: 'rgb(10, 10, 10)',
				border: '3px solid var(--color-pri)',
				boxShadow: 'none'
			}}
			dateClassName='timeline-date'>
			<h3 className='card-company'>{work.company}</h3>
			<h4 className='card-role'>{work.role}</h4>
			<ul className='card-description'>
				{work.description.map((item, i) => (
					<li key={i}>{item}</li>
				))}
			</ul>

			<div ref={visibleRef} className='tools-list'>
				{visibleTools.map(tool => (
					<span key={tool} className='tool-pill'>{tool}</span>
				))}
			</div>

			{hasMore && expanded && (
				<div className='tools-list tools-extra'>
					{hiddenTools.map(tool => (
						<span key={tool} className='tool-pill'>{tool}</span>
					))}
				</div>
			)}

			{hasMore && (
				<button className='tools-toggle' onClick={() => setExpanded(!expanded)}>
					{expanded ? 'Show less ▴' : `+${hiddenTools.length} more ▾`}
				</button>
			)}
		</VerticalTimelineElement>
	);
};

export default TimelineItem;

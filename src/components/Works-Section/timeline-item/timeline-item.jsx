import React, { useState, useRef, useEffect } from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import './timeline-item.css';

const GAP = 8;

const TimelineItem = ({ work }) => {
	const [expanded, setExpanded] = useState(false);
	const [hasOverflow, setHasOverflow] = useState(false);
	const [collapsedHeight, setCollapsedHeight] = useState(null);
	const [hiddenCount, setHiddenCount] = useState(0);
	const toolsRef = useRef(null);
	const pillRef = useRef(null);

	useEffect(() => {
		const el = toolsRef.current;
		const pill = pillRef.current;
		if (!el || !pill) return;

		const pillHeight = pill.offsetHeight;
		const twoRowsHeight = pillHeight * 2 + GAP;

		setCollapsedHeight(twoRowsHeight);
		setHasOverflow(el.scrollHeight > twoRowsHeight + 1);

		const pills = el.querySelectorAll('.tool-pill');
		let hidden = 0;
		pills.forEach(p => {
			if (p.offsetTop + p.offsetHeight > twoRowsHeight) {
				hidden++;
			}
		});
		setHiddenCount(hidden);
	}, [work.tools]);

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

			<div
				ref={toolsRef}
				className='tools-list'
				style={
					hasOverflow && !expanded && collapsedHeight
						? { maxHeight: collapsedHeight, overflow: 'hidden' }
						: undefined
				}>
				{work.tools.map((tool, i) => (
					<span
						key={tool}
						className='tool-pill'
						ref={i === 0 ? pillRef : undefined}>
						{tool}
					</span>
				))}
			</div>

			{hasOverflow && (
				<button className='tools-toggle' onClick={() => setExpanded(!expanded)}>
					{expanded ? 'Show less' : `+${hiddenCount} more`}
				</button>
			)}
		</VerticalTimelineElement>
	);
};

export default TimelineItem;

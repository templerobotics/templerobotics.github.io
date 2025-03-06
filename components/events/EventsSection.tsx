import { EventProps, events } from './EventsData'
import styles from './EventsSection.module.css'

import React from 'react'

const EventsSection = (): React.ReactElement => {
	const removePastEvents = (): EventProps[] => {
		const currentDate = new Date();
		currentDate.setHours(23, 59, 0, 0)
		const updatedEventsWithDates = events.map(event => {
			if (event.endDate && event.endDate.getTime() > currentDate.getTime()) {
				// Set date to be the next event occurrence if weekly
				const dayOffset = (7 + event.date.getDay() - currentDate.getDay()) % 7
				const nextOccurrence = new Date(currentDate.getTime() + dayOffset * 24 * 60 * 60 * 1000)
				nextOccurrence.setHours(event.date.getHours(), event.date.getMinutes())
				event.date = nextOccurrence
			}
			return event
		});
		const filteredEvents = updatedEventsWithDates.filter(event => event.date.getTime() > currentDate.getTime())
		return filteredEvents
	}

	return (
		<div className={`flex-vertical ${styles.container}`}>
			{removePastEvents().map((event, i) => <EventRow key={i} event={event}/>)}
		</div>
	)
}

const EventRow = ({ event }: { event: EventProps }): React.ReactElement => {
	return (
		<div className={styles.eventRow}>
			<div className={`flex-vertical ${styles.eventRowLeft}`}>
				<div className={`sub-section-header-text`}>{event.date.getMonth() + 1}/{event.date.getDate()}</div>
				{event.endDate && <div>Weekly on Monday&apos;s</div>}
			</div>
			<div className={styles.eventRowRight}>
				<div className={`flex-horizontal sub-section-header-text`}>{event.title}</div>
				<div className={styles.textContainer}>
					<div>{event.location}</div>
					<div>{event.description}</div>
					<div>Time: {toTimeString(event.date)}</div>
				</div>
			</div>
		</div>
	)
}

function toTimeString (date: Date): string {
	const time = date.toTimeString().split(' ')[0].split(':')
	const hours = parseInt(time[0])
	const minutes = time[1]
	return `${hours % 12}:${minutes} ${hours >= 12 ? 'PM' : 'AM'}`
}

export default EventsSection

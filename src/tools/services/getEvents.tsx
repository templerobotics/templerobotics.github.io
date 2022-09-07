import EVENT_INFO from '../../data/EventsDatabase'
import { EventObject } from '../CustomTypes'

function sortByDate(eventA: EventObject, eventB: EventObject): number {
	if (eventA.date > eventB.date || isNaN(eventA.date.getMonth())) {
		return 1
	} else if (eventA.date == eventB.date) {
		return 0
	}
	return -1
}

/**
 * Change the date for weekly events to the next one
 * @param events The events to be posted
 * @returns The events to be posted with the correct weekly dates
 */
function handleWeeklyEvents(events: EventObject[]): EventObject[] {
	const currentDate = new Date()
	currentDate.setDate(currentDate.getDate() - 1)
	currentDate.setUTCHours(23, 59, 59, 999)

	// Remove events that are in the past and no longer occurring.
	events = events.filter(event => {
		if (event.date < currentDate && !event.weekly) return 0
		if (event.weekly && ((event.endDate ?? new Date()) < currentDate)) return 0
		return 1
	})

	// Handle weekly dates
	events.forEach(event => {
		const currentDayForWeek = new Date()
		if (event.weekly) {
			event.date.setDate(currentDayForWeek.getDate() + (7 + event.date.getDay() - currentDayForWeek.getDay()) % 7)
		}
	})

	return events.sort(sortByDate)
}

export function getEvents(): EventObject[] {
	const data = EVENT_INFO
	return handleWeeklyEvents(data)
}

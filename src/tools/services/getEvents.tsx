import EVENT_INFO from '../../data/EventsDatabase'
import { EventObject } from '../CustomTypes'

function sortByDate(eventA: EventObject, eventB: EventObject): number {
	const dateComparison = eventA.date.getTime() - eventB.date.getTime()
	if (dateComparison > 0 || isNaN(eventA.date.getMonth())) {
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
	// Date used to filter out old events
	const dateFilter = new Date()
	dateFilter.setDate(dateFilter.getDate() - 1)
	dateFilter.setUTCHours(23, 59, 59, 999)

	// Remove events that are in the past and no longer occurring.
	events = events.filter(event => {
		if (event.date < dateFilter && !event.weekly) return 0
		if (event.weekly && ((event.endDate ?? new Date()) < dateFilter)) return 0
		return 1
	})

	// Handle weekly dates
	events.forEach(event => {
		const currentDayForWeek = new Date()
		const dayOffset = (7 + event.date.getDay() - currentDayForWeek.getDay()) % 7
		const dateComparison = event.date.getTime() - currentDayForWeek.getTime()
		if (event.weekly && dateComparison < 0) {
			const newDate = currentDayForWeek.getTime() + dayOffset * 24 * 60 * 60 * 1000
			event.date = new Date(newDate)
		}
	})

	return events.sort(sortByDate)
}

export function getEvents(): EventObject[] {
	const data = EVENT_INFO
	return handleWeeklyEvents(data)
}

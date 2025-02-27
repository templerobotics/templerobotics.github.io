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
	const currentDateTime = new Date().getTime() // Get current time in milliseconds
	const dateFilter = new Date()
	dateFilter.setDate(dateFilter.getDate() - 1)
	dateFilter.setUTCHours(23, 59, 59, 999)
	events = events.filter(event => {
		if (event.date < dateFilter && !event.weekly) return 0
		if (event.weekly && ((event.endDate ?? new Date()) < dateFilter)) return 0
		return 1
	})
	return events
		.map(event => {
			const eventDate = new Date(event.date) // Copy event date
			const eventEndDate = event.endDate ? new Date(event.endDate) : null
			const eventDuration = (event.duration ?? 60) * 60 * 1000 // Convert minutes to milliseconds (default 1hr)

			// Compute the actual end time of the event
			let eventEndTime = eventDate.getTime() + eventDuration

			// If it's a weekly event and has passed, move it forward to the next valid week
			if (event.weekly) {
				while (eventEndTime < currentDateTime) {
					eventDate.setDate(eventDate.getDate() + 7) // Move event forward by one week
					eventEndTime = eventDate.getTime() + eventDuration // Update end time
				}

				// Stop repeating events if the new date exceeds `endDate`
				if (eventEndDate && eventDate.getTime() > eventEndDate.getTime()) {
					return null // Exclude this event
				}

				return { ...event, date: eventDate } // Return updated weekly event
			}

			// Non-weekly events should stay as they are
			return event
		})
		.filter((event): event is EventObject => event !== null)
		.sort(sortByDate)
}


export function getEvents(): EventObject[] {
	const data = EVENT_INFO
	return handleWeeklyEvents(data)
}

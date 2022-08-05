import { EventObject } from '../CustomTypes'

type EventJson = {
	title: string,
	date: string,
	location: string,
	time: string,
	description: string
}

function sortByDate(eventA: EventObject, eventB: EventObject): number {
	if (eventA.date > eventB.date || isNaN(eventA.date.getMonth())) {
		return 1
	} else if (eventA.date == eventB.date) {
		return 0
	}
	return -1
}

export async function getEvents(): Promise<EventObject[]> {
	// Prefix used because of this thread: https://stackoverflow.com/questions/43262121/trying-to-use-fetch-and-pass-in-mode-no-cors
	const data = await fetch('https://arcane-inlet-30828.herokuapp.com/https://templerobotics.github.io/db.json')
	const eventData: EventJson[] = (await data.json()).events
	const currentDate = new Date()
	currentDate.setDate(currentDate.getDate() + 1)
	const returnData: EventObject[] = eventData.map(event => {
		return { ...event, date: currentDate }
	})
	eventData.forEach((event, i) => {
		returnData[i].date = new Date(event.date)
	})
	return returnData.filter(event => event.date.getTime() > currentDate.getTime() || isNaN(event.date.getMilliseconds())).sort(sortByDate)
}

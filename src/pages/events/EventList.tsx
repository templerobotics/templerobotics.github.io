import React from 'react'
import { EventObject } from '../../tools/CustomTypes'

import Styles from './EventListStyles'

const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

class EventList extends React.Component<{events: EventObject[], loading: boolean}, never> {
	render (): React.ReactElement {
		if (this.props.events.length === 0) {
			return <p>There are no events to display</p>
		}
		return (
			<Styles.EventListContainer rows={this.props.events.length}>
				{this.props.events.map((event, i) => {
					return (
						<Styles.EventItemContainer key={i}>
							<h2 className='title'>{event.title}</h2>
							<div className='date' style={{display: 'flex', flexDirection: 'column', rowGap: '13%'}}>
								<p>{!isNaN(event.date.getMonth()) ? `${event.date.getMonth() + 1}/${event.date.getDate()}` : 'TBD'}</p>
								<p className='day-of-week' style={{margin: '0'}}>
									{event?.weekly ? `Weekly on ${dayOfWeek[event.date.getDay()]}s` : ''}
								</p>
							</div>
							<div className='location'>
								<p>Location: {event.location}</p>
								<p>Time: {event.tbd ? 'TBD' : toTimeString(event.date)}</p>
							</div>
							<p className='description'>Description: {event.description}</p>
						</Styles.EventItemContainer>
					)
				})}
			</Styles.EventListContainer>
		)
	}
}

function toTimeString (date: Date): string {
	const time = date.toTimeString().split(' ')[0].split(':')
	const hours = parseInt(time[0])
	const minutes = time[1]
	return `${hours % 12}:${minutes} ${hours >= 12 ? 'PM' : 'AM'}`
}

export default EventList

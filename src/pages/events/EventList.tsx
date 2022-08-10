import React from 'react'
import { EventObject } from '../../tools/CustomTypes'

import Styles from './EventListStyles'

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
							<div className='date'>
								<p>{!isNaN(event.date.getMonth()) ? `${event.date.getMonth() + 1}/${event.date.getDate()}` : 'TBD'}</p>
							</div>
							<div className='location'>
								<p>Location: {event.location}</p>
								<p>Time: {event.time === '' ? 'TBD' : event.time}</p>
							</div>
							<p className='description'>Description: {event.description}</p>
						</Styles.EventItemContainer>
					)
				})}
			</Styles.EventListContainer>
		)
	}
}

export default EventList

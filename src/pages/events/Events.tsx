import React from 'react'
import { AiOutlineDash } from 'react-icons/ai'
import { toast } from 'react-toastify'
import EventList from './EventList'

import Styles from './EventsStyles'

import ClipLoader from 'react-spinners/ClipLoader'
import Contact from '../general/contact/Contact'
import { EventObject } from '../../tools/CustomTypes'
import { COLORS } from '../../tools/Constants'
import { getEvents } from '../../tools/services/getEvents'
// import EventSignUp from './EventSignUp'
import EVENT_SIGNUP_INFO from '../../data/EventSignUpInfo'

export type EventsState = {
	loading: boolean,
	events: EventObject[]
}

export function getEventToasts(): void {
	EVENT_SIGNUP_INFO.forEach(event => {
		toast('🤖 ' + event.title, {
			theme: 'dark',
			onClick: () => window.open(event.src),
			autoClose: 4000
		})
	})
}

class Events extends React.Component<unknown, EventsState>{
	constructor(props: never) {
		super(props)
		this.state = { loading: true, events: [] }
	}

	componentDidMount(): void {
		try {
			const events = getEvents()
			this.setState({ loading: false, events: events })
		} catch (error) {
			console.log(error)
		}
	}

	renderEvents = (size: number): React.ReactElement => {
		if(this.state.loading) {
			return <ClipLoader color={COLORS.PRIMARY} size={size}/>
		} else {
			return <EventList events={this.state.events} loading={this.state.loading}/>
		}
	}

	render (): React.ReactElement {
		const width = document.documentElement.style.getPropertyValue('--vh')
		return (
			<Styles.EventsContainer numOfEvents={this.state.events.length}>
				<Styles.TitleContainer className='title-container'>
					<h2 className='title'>Events</h2>
					<AiOutlineDash/>
				</Styles.TitleContainer>
				{/* Uncomment for event sign-ups */}
				{/* <Styles.EventSignUps>
					{EVENT_SIGNUP_INFO.map((event, i) => <EventSignUp key={i} events={event}/>)}
				</Styles.EventSignUps> */}
				{this.renderEvents(parseFloat(width) * 0.03)}
				<Contact/>
			</Styles.EventsContainer>
		)
	}
}

export default Events

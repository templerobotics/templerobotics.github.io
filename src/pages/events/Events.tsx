import React from 'react'
import { AiOutlineDash } from 'react-icons/ai'
import EventList from './EventList'

import Styles from './EventsStyles'

import ClipLoader from 'react-spinners/ClipLoader'
import Contact from '../general/contact/Contact'
import { EventObject } from '../../tools/CustomTypes'
import { COLORS } from '../../tools/Constants'
import { getEvents } from '../../tools/services/getEvents'
import EventSignUp from './EventSignUp'

export type EventsState = {
	loading: boolean,
	events: EventObject[]
}

class Events extends React.Component<unknown, EventsState>{
	constructor(props: never) {
		super(props)
		this.state = { loading: true, events: [] }
	}

	async componentDidMount(): Promise<void> {
		try {
			const events = await getEvents()
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
				<Styles.EventSignUps>
					<EventSignUp
						title='Robotics Sign Up'
						description='Sign up for the club!'
						src={`https://docs.google.com/forms/d/e/1FAIpQLSea1tnIeueKhYVQjzD
							B4B3Eu9SW2346thjVDTSs5X0GFM-5vQ/viewform?usp=sf_link`}/>
					<EventSignUp
						title='Build Day Sign Up'
						description='Sign up for the outreach build days!'
						src={`https://docs.google.com/forms/d/e/1FAIpQLSdOjuVGK6zYMWIRCSSR3L
							GqVTssxk2A5HxDehjSpYo6C3tGAw/viewform?usp=sf_link`}/>
				</Styles.EventSignUps>
				{this.renderEvents(parseFloat(width) * 0.03)}
				<Contact/>
			</Styles.EventsContainer>
		)
	}
}

export default Events

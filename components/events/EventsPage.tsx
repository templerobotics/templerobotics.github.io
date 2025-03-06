import ContactUs from '../shared/ContactUs'

import styles from './EventsPage.module.css'

import React from 'react'
import EventsSection from './EventsSection'

const EventsPage = (): React.ReactElement => {
	return (
		<div className={styles.container}>
			<div className='flex-horizontal section-header-text'>Upcoming Events</div>
			<EventsSection />
			<ContactUs/>
		</div>
	)
}

export default EventsPage

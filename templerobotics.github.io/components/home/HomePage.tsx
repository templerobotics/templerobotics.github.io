import ContactUs from '@components/shared/ContactUs'
import ButtonSection from './ButtonSection'
import Carousel from './Carousel'
import HelpUsSection from './HelpUsSection'
import HomeHeader from './HomeHeader'
import styles from './HomePage.module.css'

import React from 'react'

const HomePage = (): React.ReactElement => {
	return (
		<div className={styles.container}>
			<HomeHeader/>
			<ButtonSection/>
			<Carousel/>
			<HelpUsSection/>
			<ContactUs/>
		</div>
	)
}

export default HomePage

import Carousel from '../shared/Carousel'
import ContactUs from '../shared/ContactUs'
import ButtonSection from './ButtonSection'
import HelpUsSection from './HelpUsSection'
import { carouselSlides } from './HomeData'
import HomeHeader from './HomeHeader'
import styles from './HomePage.module.css'

import React from 'react'

const Page = (): React.ReactElement => {
	return (
		<div className={styles.container}>
			<HomeHeader/>
			<ButtonSection/>
			<Carousel slides={carouselSlides}/>
			<HelpUsSection/>
			<ContactUs/>
		</div>
	)
}

export default Page

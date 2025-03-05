import React from 'react'

import PhotoGallery from '../shared/PhotoGallery'
import ContactUs from '../shared/ContactUs'

import AugerSection from './AugerSection'
import Header from './RoboticsHeader'
import styles from './RoboticsPage.module.css'
import { meetTheTeamPhotoData, rmcPhotoGallery } from './RoboticsData'

const RoboticsPage = (): React.ReactElement => {
	return (
		<div className={styles.container}>
			<Header/>
			<AugerSection/>
			<div className='flex-horizontal sub-section-header-text'>Meet the Team</div>
			<PhotoGallery photos={meetTheTeamPhotoData}/>
			<div className='flex-horizontal sub-section-header-text'>Photo Gallery</div>
			<PhotoGallery photos={rmcPhotoGallery}/>
			<ContactUs/>
		</div>
	)
}

export default RoboticsPage

import React from 'react'

import PhotoGallery from '../shared/PhotoGallery'
import ContactUs from '../shared/ContactUs'

import Header from './RoboticsHeader'
import styles from './RoboticsPage.module.css'
import { augerSectionData, meetTheTeamPhotoData, rmcPhotoGallery } from './RoboticsData'
import OutreachAndEvents from './OutreachAndEvents'
import TextPictureSection from '@components/shared/TextPictureSection'

const RoboticsPage = (): React.ReactElement => {
	return (
		<div className={styles.container}>
			<Header/>
			<TextPictureSection props={augerSectionData} />
			<div className={`flex-vertical ${styles.spaceBackground}`}>
				<div className={styles.gridContent}>
					<PhotoGallery title={'Meet the Team'} photos={meetTheTeamPhotoData}/>
					<OutreachAndEvents/>
					<PhotoGallery title={'Photo Gallery'} photos={rmcPhotoGallery}/>
				</div>
			</div>
			<ContactUs/>
		</div>
	)
}

export default RoboticsPage

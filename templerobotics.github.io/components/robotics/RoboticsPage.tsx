import React from 'react'

import PhotoGallery from '../shared/PhotoGallery'
import ContactUs from '../shared/ContactUs'

import Header from './RoboticsHeader'
import styles from './RoboticsPage.module.css'
import { meetTheTeamPhotoData, rmcPhotoGallery } from './RoboticsData'
import OutreachAndEvents from './OutreachAndEvents'
import TextPictureSection, { TextPictureSectionProps } from '@components/shared/TextPictureSection'

const augerSectionData: TextPictureSectionProps = {
	text:`
		The NASA Robotics Mining Competition is a competition in
		which university-level students design and build a mining
		robot that can traverse the simulated Martian chaotic terrain.
		See our robot to the right!
	`,
	video: {
		src: 'videos/augerbotPromotion.mp4'
	},
	button: {
		text: 'Learn More',
		path: 'https://www.nasa.gov/learning-resources/lunabotics-challenge/',
	}
}

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

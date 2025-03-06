import styles from './OutreachAndEvents.module.css'

import React from 'react'

import img1 from '@assets/images/outreach/vex.jpg'
import img2 from '@assets/images/outreach/expo.jpg'
import img3 from '@assets/images/outreach/interview.gif'
import Image from 'next/image'

const OutreachAndEvents = (): React.ReactElement => {
	return (
		<div className={`flex-vertical ${styles.container}`}>
			<div className='flex-horizontal sub-section-header-text'>Outreach and Events</div>
			<div className={`flex-horizontal ${styles.row}`}>
				<div className={styles.textContainer}>
					<div className='sub-section-header-text'>Vex State Sectionals</div>
					<div className='sub-section-text'>
						Our team members volunteered at the competition to help judge notebooks
						ref the playing the field and interview teams for award selection.
					</div>
				</div>

				<div className={styles.imageContainer}>
					<Image fill src={img1} alt='Vex State Sectionals' />
				</div>
			</div>
			<div className={`flex-horizontal ${styles.row}`}>
				<div className={styles.imageContainer}>
					<Image fill src={img2} alt='Philadelphia Robotics Expo' />
				</div>

				<div className={styles.textContainer}>
					<div className='sub-section-header-text'>Philadelphia Robotics Expo</div>
					<div className='sub-section-text'>
						Our tabling event at the Philadelphia Robotics Expo where about 300 high school
						students came to see what philadelphia had to offer in robotics.
					</div>
				</div>
			</div>
			<div className={`flex-horizontal ${styles.row}`}>
				<div className={styles.textContainer}>
					<div className='sub-section-header-text'>Temple University TV</div>
					<div className='sub-section-text'>
						Our faculty advisor Dr. Helferty, a former NASA employee, talks about how starting
						Temple Robotics and what it has become today.
					</div>
				</div>

				<div className={styles.imageContainer}>
					<Image fill src={img3} alt='Temple University TV' />
				</div>
			</div>
		</div>
	)
}

export default OutreachAndEvents

import robotLogo from '@assets/images/logos/robotics-red.png'

import styles from './RoboticsHeader.module.css'

import React from 'react'
import Image from 'next/image'

const Header = (): React.ReactElement => {
	return (
		<div className={`flex-vertical ${styles.container}`}>
			<div>
				<div className='flex-horizontal'>
					<Image className={styles.mainTitle} src={robotLogo} alt={'Robotics logo'}/>
				</div>
				<div className={`header-text ${styles.mainTitleCaption}`}>We make robots and stuff</div>
			</div>
			<div>
				<div className={styles.preHeader}>Visit us in the</div>
				<div className={`header-text ${styles.location}`}>NASA Space Exploration and Embedded Systems Lab</div>
				<div className={`header-text ${styles.location}`}>in the College of Engineering IDEAS Hub</div>
			</div>
		</div>
	)
}

export default Header

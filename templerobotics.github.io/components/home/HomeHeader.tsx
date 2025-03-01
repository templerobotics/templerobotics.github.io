import styles from './HomeHeader.module.css'

import React from 'react'

const HomeHeader = (): React.ReactElement => {
	return (
		<div className={`flex-vertical ${styles.container}`}>
			<div>
				<div className={`header-text ${styles.mainTitle}`}>Temple Space Exploration and Robotics</div>
				<div className={`header-text ${styles.mainTitleCaption}`}>Shoot for the moon with us!</div>
			</div>
			<div>
				<div className={styles.preHeader}>Visit us in the</div>
				<div className={`header-text ${styles.location}`}>NASA Space Exploration and Embedded Systems Lab</div>
				<div className={`header-text ${styles.location}`}>in the College of Engineering IDEAS Hub</div>
			</div>
		</div>
	)
}

export default HomeHeader

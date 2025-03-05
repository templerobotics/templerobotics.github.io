import { Button } from '@mui/material'
import styles from './HelpUsSection.module.css'

import React from 'react'

const HelpUsSection = (): React.ReactElement => {
	return (
		<div className={`flex-vertical-space-around ${styles.container}`}>
			<div className='sub-section-header-text'>Help Temple get to the moon!</div>
			<div className={`flex-horizontal ${styles.buttonContainer}`}>
				<Button variant="outlined">Buy Merchandise</Button>
				<Button variant="outlined">Become a Sponsor</Button>
			</div>
		</div>
	)
}

export default HelpUsSection

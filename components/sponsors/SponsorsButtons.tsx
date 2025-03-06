import { Button } from '@mui/material'
import styles from './SponsorsButtons.module.css'

import React from 'react'

const SponsorsButtons = (): React.ReactElement => {
	return (
		<div className={`flex-horizontal ${styles.container}`}>
			<Button
				href='https://forms.gle/pAfv3VBYJJXooiU38'
				target='_blank'
				rel='noreferrer'
				size='large'
				variant='outlined'>
				Become a sponsor
			</Button>
			<Button
				href='https://1drv.ms/b/s!Amh3vGkfvOw1c48kx0hFRCY6Hf4?e=OK65qr'
				target='_blank'
				rel='noreferrer'
				size='large'
				variant='outlined'>
				Sponsorship opportunities
			</Button>
		</div>
	)
}

export default SponsorsButtons

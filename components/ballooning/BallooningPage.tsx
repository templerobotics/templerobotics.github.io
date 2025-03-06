import ContactUs from '../shared/ContactUs'

import styles from './BallooningPage.module.css'

import React from 'react'
import { ballooningTextPictureData } from './BallooningData'
import TextPictureSection from '@components/shared/TextPictureSection'

const BallooningPage = (): React.ReactElement => {
	return (
		<div className={styles.container}>
			<div className='flex-horizontal section-header-text'>NASA Ballooning</div>
			<TextPictureSection props={ballooningTextPictureData} />
			<ContactUs/>
		</div>
	)
}

export default BallooningPage

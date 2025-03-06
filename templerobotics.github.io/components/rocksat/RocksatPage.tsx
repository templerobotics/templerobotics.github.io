import PhotoGallery from '../shared/PhotoGallery'
import ContactUs from '../shared/ContactUs'

import styles from './RocksatPage.module.css'

import React from 'react'
import { rocksatPhotoGallery } from './RocksatData'
import TextPictureSection, { TextPictureSectionProps } from '@components/shared/TextPictureSection'

const rocksatTextPictureData: TextPictureSectionProps = {
	text: `
		The RockSat-C program is a national program, run by the Colorado Space Grant
		Consortium (CSGC), where students build rocket payloads to complete science
		missions. The payload is launched in a rocket at Wallops Island and the payload
		completes its mission as it falls back to earth.
	`,
	video: {
		src: 'videos/ballooning.mp4'
	},
	button: {
		text: 'Learn More',
		path: 'https://www.templerobotics.org/static/media/rockSat-project-brief.bd63b55b5fb960dadae0.pdf'
	}
}

const RocksatPage = (): React.ReactElement => {
	return (
		<div className={styles.container}>
			<div className='flex-horizontal section-header-text'>Temple RockSat-C</div>
			<TextPictureSection props={rocksatTextPictureData} />
			<PhotoGallery photos={rocksatPhotoGallery} title='Photo Gallery'/>
			<ContactUs/>
		</div>
	)
}

export default RocksatPage

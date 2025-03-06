import PhotoGallery from '../shared/PhotoGallery'
import ContactUs from '../shared/ContactUs'

import styles from './RocksatPage.module.css'

import React from 'react'
import { rocksatPhotoGallery, rocksatTextPictureData } from './RocksatData'
import TextPictureSection from '@components/shared/TextPictureSection'

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

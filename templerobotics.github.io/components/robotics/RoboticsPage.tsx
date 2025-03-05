import PhotoGallery, { PhotoComponentProps } from '@components/shared/PhotoGallery'
import ContactUs from '../shared/ContactUs'
import AugerSection from './AugerSection'
import Header from './RoboticsHeader'
import styles from './RoboticsPage.module.css'

import React from 'react'

import img1 from '@assets/images/team/john-helferty.jpg'
import img2 from '@assets/images/team/rocco-gruzman.jpg'
import img3 from '@assets/images/team/malin-kussi.jpg'
import img4 from '@assets/images/team/javier-price-butler.jpg'
import img5 from '@assets/images/team/jaden-howard.jpg'
import img6 from '@assets/images/team/alessia-smith.jpg'
import img7 from '@assets/images/team/brian-ervin.jpg'
import img8 from '@assets/images/team/tanishka-shah.jpg'
import img9 from '@assets/images/team/jonah-tesler.jpg'

const photoData: PhotoComponentProps[] = [
	{ image: img1, title: 'Dr. John Helferty', content: 'Head Advisor' },
	{ image: img2, title: 'Rocco Gruzman', content: 'Robotic\'s President' },
	{ image: img3, title: 'Malin Kussi', content: 'Vice President' },
	{ image: img4, title: 'Javier Price-Butler', content: 'Chief of Development' },
	{ image: img5, title: 'Jaden Howard', content: 'Electrical Lead' },
	{ image: img6, title: 'Alessia Smith', content: 'Mechanical Lead' },
	{ image: img7, title: 'Brian Ervin', content: 'Programming Lead' },
	{ image: img8, title: 'Tanishka Shah', content: 'Project Manager' },
	{ image: img9, title: 'Jonah Tesler', content: 'Shop Manager' }
]

const RoboticsPage = (): React.ReactElement => {
	return (
		<div className={styles.container}>
			<Header/>
			<AugerSection/>
			<PhotoGallery photos={photoData}/>
			{/* <PhotoGallery photos={photoData}/> */}
			<ContactUs/>
		</div>
	)
}

export default RoboticsPage

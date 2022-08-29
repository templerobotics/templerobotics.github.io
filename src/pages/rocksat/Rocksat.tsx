// Third party
import React from 'react'
import { AiOutlineDash } from 'react-icons/ai'

// Custom components
import Contact from '../general/contact/Contact'
import SectionDescription from '../robotic-mining/SectionDescription'
import Table from '../../tools/Table'

// Custom styles
import Styles from './RocksatStyles'
import GALLERY_INFO from '../../data/RocksatPhotoGalleryInfo'
import TABLE_INFO from '../../data/RocksatTableInfo'

// Images
import rocksat from '../../assets/pics/carousel/rocksat17.jpeg'
import PhotoGallery from '../general/photo-gallery/PhotoGallery'
import rocksatProjectBrief from './rockSat-project-brief.pdf'

const Rocksat = (): React.ReactElement => {
	return (
		<Styles.RocksatContainer tableRows={TABLE_INFO.rows.length}>
			<Styles.TitleContainer className='title-container'>
				<h2 className='title'>Temple RockSat-C</h2>
				<AiOutlineDash/>
			</Styles.TitleContainer>
			<SectionDescription
				title='What is it?'
				img={rocksat}
				description='The RockSat-C program is a national program, run by the Colorado Space Grant Consortium
				(CSGC), where students build rocket payloads to complete science missions. The payload is launched in a
				rocket at Wallops Island and the payload completes its mission as it falls back to earth.'
				src={rocksatProjectBrief}/>

			<Table table={TABLE_INFO} />

			<PhotoGallery galleryInfo={ GALLERY_INFO }/>
			<Contact/>
		</Styles.RocksatContainer>
	)
}

export default Rocksat

// Third party
import React from 'react'
import { AiOutlineDash } from 'react-icons/ai'

// Custom components
import Contact from '../general/contact/Contact'
import SectionDescription from '../robotic-mining/SectionDescription'

// Custom styles
import Styles, { GALLERY_INFO, TableInfo } from './RocksatStyles'

// Images
import rocksat from '../../assets/pics/carousel/rocksat17.jpeg'
import createTable from '../../tools/Table'
import PhotoGallery from '../general/photo-gallery/PhotoGallery'

const Rocksat = (): React.ReactElement => {
	return (
		<Styles.RocksatContainer>
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
				src='https://spacegrant.colorado.edu/rs-c-2020-current-teams/rsc-tu-20'/>
			{/* TODO: Put in a section for previous senior design projects */}
			{createTable(TableInfo)}
			<PhotoGallery galleryInfo={ GALLERY_INFO }/>
			<Contact/>
		</Styles.RocksatContainer>
	)
}

export default Rocksat

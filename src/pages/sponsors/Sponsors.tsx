// Third party
import React from 'react'
import { AiOutlineDash } from 'react-icons/ai'

// Custom components
import Contact from '../general/contact/Contact'

// Custom styles
import Styles, { SponsorImages } from './SponsorsStyles'

const Sponsors = (): React.ReactElement => {
	return (
		<Styles.SponsorContainer>
			<Styles.TitleContainer className='title-container'>
				<h2 className='title'>Sponsors</h2>
				<AiOutlineDash/>
			</Styles.TitleContainer>

			{/* TODO: Add NASA as a sponsor and the anodizing place */}
			<div className='img-container' style={{background: '#053a92'}}>
				<img src={SponsorImages.nasa}/>
			</div>
			<div className='img-container' style={{background: 'black'}}>
				<img src={SponsorImages.arrow}/>
			</div>

			<Contact/>
		</Styles.SponsorContainer>
	)
}

export default Sponsors

// Third party
import React from 'react'
import { AiOutlineDash } from 'react-icons/ai'
import { ReactComponent as Lockheed } from '../../assets/pics/sponsors/lockheed-martin-logo.svg'
import { ReactComponent as Nasa } from '../../assets/pics/sponsors/nasa-logo.svg'
import { ReactComponent as Arrow } from '../../assets/pics/sponsors/arrow-logo.svg'

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

			<div className='img-container' style={{background: '#053a92'}}>
				<Nasa />
			</div>
			<div className='img-container' style={{background: 'white'}}>
				<Lockheed />
			</div>
			<div className='img-container' style={{background: 'black'}}>
				<Arrow />
			</div>
			<div className='img-container' style={{background: 'white'}}>
				<img src={SponsorImages.hillock} style={{width: '60%'}}/>
			</div>
			<div className='ing-container' style={{background: 'wihte'}}>
				{/* call amtrak image here, make sure it has been transerred into an svg */}
			</div>

			<Contact/>
		</Styles.SponsorContainer>
	)
}

export default Sponsors

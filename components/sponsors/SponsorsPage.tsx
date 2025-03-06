import SponsorsButtons from './SponsorsButtons'
import styles from './SponsorsPage.module.css'
import SponsorLogoSection from './SponsorLogoSection'

import React from 'react'

import nasaLogo from '@assets/images/sponsor-logos/nasa.svg'
import amtrakLogo from '@assets/images/sponsor-logos/amtrak.svg'
import hillockLogo from '@assets/images/sponsor-logos/hillock-anodizing.png'
import lockheedMartinLogo from '@assets/images/sponsor-logos/lockheed-martin.svg'
import arrowLogo from '@assets/images/sponsor-logos/arrow.svg'
import ContactUs from '@components/shared/ContactUs'

const SponsorsPage = (): React.ReactElement => {
	return (
		<div className={styles.container}>
			<div className='flex-horizontal section-header-text'>Sponsors</div>
			<SponsorsButtons/>
			<SponsorLogoSection image={nasaLogo} color='#053a92'/>
			<SponsorLogoSection image={amtrakLogo} color='white'/>
			<SponsorLogoSection image={hillockLogo} color='white'/>
			<SponsorLogoSection image={lockheedMartinLogo} color='white'/>
			<SponsorLogoSection image={arrowLogo} color='black'/>
			<ContactUs/>
		</div>
	)
}

export default SponsorsPage

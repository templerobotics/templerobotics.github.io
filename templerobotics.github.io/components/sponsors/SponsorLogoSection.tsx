import Image, { StaticImageData } from 'next/image'
import styles from './SponsorLogoSection.module.css'

import React from 'react'

const SponsorLogoSection = ({ image }: { image: StaticImageData }): React.ReactElement => {
	return (
		<div className={`flex-horizontal ${styles.container}`}>
			<Image src={image} alt='Sponsor logo'/>
		</div>
	)
}

export default SponsorLogoSection

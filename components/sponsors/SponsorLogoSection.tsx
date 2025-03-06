import Image, { StaticImageData } from 'next/image'
import styles from './SponsorLogoSection.module.css'

import React from 'react'

const SponsorLogoSection = ({ image, color }: { image: StaticImageData, color: string }): React.ReactElement => {
	return (
		<div className={`flex-horizontal ${styles.container}`} style={{ backgroundColor: color }}>
			<div className={styles.imageContainer}>
				<Image fill src={image} alt='Sponsor logo'/>
			</div>
		</div>
	)
}

export default SponsorLogoSection

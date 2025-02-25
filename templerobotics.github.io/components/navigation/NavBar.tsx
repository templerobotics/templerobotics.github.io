import styles from './NavBar.module.css'

import clubLogo from '@assets/club-logo.png'

import React from 'react'
import { Link } from '@mui/material'
import Image from 'next/image'
import { PATHS } from '@utils/Constants'
import DropDownMenu from './DropDownMenu'

export default function NavBar (): React.ReactElement {
	return (
		<div className={`${styles.navBar} flex-horizontal`}>
			<Link className={styles.iconLink} href={PATHS.HOME}>
				<div className={'flex-horizontal'}>
					<Image className={styles.image} src={clubLogo} alt='Robotics logo'/>
					<div>Temple Robotics</div>
				</div>
			</Link>

			<div className={'flex-horizontal'}>
				<Link href={PATHS.HOME}>Home</Link>
				<Link href={PATHS.ROBOTICS}>Robotics</Link>
				<DropDownMenu/>
			</div>
		</div>
	)
}

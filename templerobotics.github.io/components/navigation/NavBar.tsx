import styles from './NavBar.module.css'

import clubLogo from '@assets/images/logos/club-logo.png'

import React from 'react'
import { Link } from '@mui/material'
import Image from 'next/image'
import { PATHS } from '@utils/Constants'
import DropDownMenu from './DropdownMenu'

const dropDownItems = [
	{ text: 'Events', path: PATHS.EVENTS },
	{ text: 'ewfwfwfwewefwefwefew', path: PATHS.SPONSORS }
]

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
				<DropDownMenu title={{ text: 'Robotics', path: PATHS.ROBOTICS }} items={dropDownItems}/>
				<Link href={PATHS.ROCKSAT}>Rocksat</Link>
				<Link href={PATHS.BALLOONING}>NASA Ballooning</Link>
			</div>
		</div>
	)
}

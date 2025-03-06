import styles from './ContactUs.module.css'

import React from 'react'
import Favorite from '@mui/icons-material/Favorite'
import LinkedIn from '@mui/icons-material/LinkedIn'
import Instagram from '@mui/icons-material/Instagram'
import Twitter from '@mui/icons-material/Twitter'
import Facebook from '@mui/icons-material/Facebook'
import YouTube from '@mui/icons-material/YouTube'
import Email from '@mui/icons-material/Email'
import { Link } from '@mui/material'

const ContactUs = (): React.ReactElement => {
	return (
		<div className={`flex-vertical-space-around ${styles.container}`}>
			<div className='sub-section-header-text'>We <Favorite fontSize='inherit'/> new friends!</div>
			<div className={`flex-horizontal ${styles.icons}`}>
				<Link target='_blank' rel='noreferrer' href={'https://www.instagram.com/templerobotics/'}><Instagram fontSize='large'/></Link>
				<Link target='_blank' rel='noreferrer' href={'https://twitter.com/templerobotics'}><Twitter fontSize='large'/></Link>
				<Link target='_blank' rel='noreferrer' href={'https://www.facebook.com/templerobotics'}><Facebook fontSize='large'/></Link>
				<Link target='_blank' rel='noreferrer' href={'https://www.youtube.com/channel/UCv59XUAVDLtgk0KA9r4RTsA'}><YouTube fontSize='large'/></Link>
				<Link target='_blank' rel='noreferrer' href={'Mailto:Temple.Robotics@outlook.com'}><Email fontSize='large'/></Link>
				<Link target='_blank' rel='noreferrer' href={'https://www.linkedin.com/company/temple-robotics/posts/?feedView=all'}><LinkedIn fontSize='large'/></Link>
			</div>
		</div>
	)
}

export default ContactUs

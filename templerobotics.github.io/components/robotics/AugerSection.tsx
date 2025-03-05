import styles from './AugerSection.module.css'

import React from 'react'
import { Button } from '@mui/material'

const AugerSection = (): React.ReactElement => {
	return (
		<div className={`flex-horizontal ${styles.container}`}>
			<div className={`flex-vertical ${styles.textSection}`}>
				<div className='flex-vertical' style={{ width: '60%', height: '100%' }}>
					<div className='sub-section-header-text'>What is it?</div>
					<div>
						The NASA Robotics Mining Competition is a competition in
						which university-level students design and build a mining
						robot that can traverse the simulated Martian chaotic terrain.
						See our robot to the right!
					</div>
					<Button
						variant='outlined'
						href='https://www.nasa.gov/learning-resources/lunabotics-challenge/'
						target='_blank'
						rel='noreferrer'>
						Learn More
					</Button>
				</div>
			</div>
			<div>
				<video autoPlay muted loop playsInline width={'100%'}>
					<source src={'/videos/augerbotPromotion.mp4'} type='video/mp4'/>
					Your browser does not support the video tag.
				</video>
			</div>
		</div>
	)
}

export default AugerSection

import React from 'react'

import { SlideInfo } from '../pages/general/carousel/CarouselStyles'
import slide1 from '../assets/pics/photo-gallery/rmc/comp-team-2024.jpg'
import slide2 from '../assets/pics/carousel/rocksat17.jpeg'
import slide3 from '../assets/pics/carousel/rmc-team.jpeg'
import slide4 from '../assets/pics/carousel/balloon-team.jpeg'
import { COLORS, PATHS } from '../tools/Constants'
import Button from '../pages/general/button/Button'

const HOME_CAROUSEL_INFO: SlideInfo[] = [
	{
		image: slide1,
		title: 'Robotics', description: `The Robotics teams designs, builds and competes with a mining robot every
		year at the NASA Lunabotics Competition. Getting the chance to compete against other schools in Florida helps 
		us improve our skills and represent Temple at a big event.`,
		color: COLORS.PRIMARY, otherContent: <Button source={PATHS.ROBOTICS}
			size={'medium'} text={'Learn More'} local/>
	},
	{
		image: slide2,
		title: 'ROCKSAT', description: `The RockSat Team designed a payload that will be placed inside of a sounding 
		rocket which is provided by the Wallops Flight Facility. The rocket will launch at Wallops Island where it will follow a 
		sub-orbital flight path into the Atlantic Ocean, reaching an estimated maximum height of 72 miles.`,
		color: COLORS.GREEN, otherContent: <Button source={PATHS.ROCKSAT}
			size={'medium'} text={'Learn More'} local/>
	},
	{
		image: slide3, title: 'NASA RMC',
		description: `The NASA Robotics Mining Competition is a university-level student competition 
		to design and build a mining robot that can traverse the challenging simulated Martian terrain.
		The mining robot must then excavate the regolith simulant and/or the ice simulant (gravel) and
		return the excavated mass for deposit into the collector bin to simulate an off-world, in situ
		resource mining mission.`,
		color: COLORS.BLUE,
		otherContent: <Button source={PATHS.ROBOTICS} text={'Learn More'} size={'medium'} local/>
	},
	{
		image: slide4, title: 'NASA BALLOONING',
		description: `The Temple NASA Ballooning Team will participate as one of over fifty teams 
		responsible for the design and production of an HAB that is capable of recording and streaming live video footage to the NASA 
		website, a task which has never been attempted for a solar eclipse.`,
		color: COLORS.PURPLE,
		otherContent:
		<div style={{justifyContent: 'center', columnGap: '5%', display: 'flex', flexDirection: 'row'}}>
			<Button source={PATHS.BALLOONING} text={'Learn More'} size={'medium'} local/>
			<Button source={'https://www.youtube.com/watch?v=rGMibNYSnRg'} text={'Watch Video'} size={'medium'} />
		</div>
	}
]

export default HOME_CAROUSEL_INFO

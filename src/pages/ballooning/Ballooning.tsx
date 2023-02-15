// Third party
import React from 'react'
// import { AiOutlineDash } from 'react-icons/ai'

// // Custom components
// import Contact from '../general/contact/Contact'
// import SectionDescription from '../robotic-mining/SectionDescription'

// // Custom styles
// import Styles from './BallooningStyles'

// // Images
// import balloon from '../../assets/vids/ballooning-vid.mp4'


import { SlideInfo } from '../general/carousel/CarouselStyles'
import { COLORS, PATHS } from '../../tools/Constants'
import Button from '../general/button/Button'
import slide1 from '../../assets/pics/carousel/balloon-team.jpeg'

const Ballooning: SlideInfo[] = [
	{
		image: slide1,
		title: 'ROCKSAT', description: `The RockSat Team designed a payload that will be placed inside of a sounding 
		rocket which is provided by the Wallops Flight Facility. The rocket will launch at Wallops Island where it will follow a 
		sub-orbital flight path into the Atlantic Ocean, reaching an estimated maximum height of 72 miles.`,
		color: COLORS.GREEN, otherContent: <Button source={PATHS.ROCKSAT}
			size={'medium'} text={'Learn More'} local/>
	}
]

export default Ballooning

// const Ballooning = (): React.ReactElement => {
// 	return (
// 		<Styles.BallooningContainer>
// 			<Styles.TitleContainer className='title-container'>
// 				<h2 className='title'>Projects</h2>
// 				<AiOutlineDash/>
// 			</Styles.TitleContainer>
// 			<SectionDescription
// 				title='NASA Ballooning'
// 				img={balloon}
// 				description='During the eclipse of 2017, NASA reached out to multiple schools across the
// 				country to help observe it, and Temple was one of those schools! Dr. Helferty led a team
// 				of engineers to new hights when deploying a balloon 90,000 to 130,000 feet in the air with
// 				a 360 degree camera attached.'
// 				src={'https://engineering.temple.edu/news/news-solar-eclipse-sparks-new-heights-ballooning'}
// 				video/>
// 			<Contact/>
// 		</Styles.BallooningContainer>
// 	)
// }





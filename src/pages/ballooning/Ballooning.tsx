// Third party
import React from 'react'
import { AiOutlineDash } from 'react-icons/ai'

// Custom components
import Contact from '../general/contact/Contact'
import SectionDescription from '../robotic-mining/SectionDescription'

// Custom styles
import Styles from './BallooningStyles'

// Images
import balloon from '../../assets/vids/ballooning-vid.mp4'

const Ballooning = (): React.ReactElement => {
	return (
		<Styles.BallooningContainer>
			<Styles.TitleContainer className='title-container'>
				<h2 className='title'>Nasa Ballooning</h2>
				<AiOutlineDash/>
			</Styles.TitleContainer>
			<SectionDescription
				title='What is it?'
				img={balloon}
				description='During the eclipse of 2017, NASA reached out to multiple schools across the
				country to help observe it, and Temple was one of those schools! Dr. Helferty led a team
				of engineers to new hights when deploying a balloon 90,000 to 130,000 feet in the air with
				a 360 degree camera attached.'
				src={'https://engineering.temple.edu/news/news-solar-eclipse-sparks-new-heights-ballooning'}
				video/>
			<Contact/>
		</Styles.BallooningContainer>
	)
}

export default Ballooning

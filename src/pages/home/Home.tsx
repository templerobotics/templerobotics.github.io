// Third party imports
import React from 'react'

// Custom styles
import Styles from './HomeStyles'

// Custom components
import Carousel from '../general/carousel/Carousel'
import Contact from '../general/contact/Contact'
import Button from '../general/button/Button'

// Images
import nasaLogo from '../../assets/pics/logos/nasa.png'
import HOME_CAROUSEL_INFO from '../../data/HomeCarouselInfo'

const Home = (): React.ReactElement => {
	return (
		<Styles.HomeContainer>
			<Styles.TitleContainer className='title-container'>
				<div className='nasa-title'>
					<img src={nasaLogo} alt='NASA'/>
					<p>Temple Space Exploration</p>
				</div>
				<Styles.LargeText>Shoot for the moon with us!</Styles.LargeText>
				<Styles.SmallText>Visit us in the</Styles.SmallText>
				<Styles.Header>
					NASA space exploration and embedded systems lab <br/>
					(second floor of the engineering building)
				</Styles.Header>
			</Styles.TitleContainer>

			<Styles.VideoSource source={'https://www.youtube.com/watch?v=WeA7edXsU40'}
				text={'Video Source'} />

			<Styles.SectionHeader>
				<h2>Program</h2>
			</Styles.SectionHeader>

			<Carousel slideInfo={HOME_CAROUSEL_INFO}/>

			<Styles.SectionHeader>
				<h2>Help Temple Space Exploration get to the moon!</h2>
				<div className='button-container'>
					<Button source={'https://temple-robotics.creator-spring.com/?'} text={'Buy Merchandise'} size={'large'}/>
					<Button source={'/sponsors'} text={'Become a Sponsor'} size={'large'} local/>
				</div>
			</Styles.SectionHeader>

			{/* TODO: Put in a merchandise section */}

			<Contact/>
		</Styles.HomeContainer>
	)
}

export default Home

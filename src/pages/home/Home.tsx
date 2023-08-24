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
import TOwl from '../../assets/pics/logos/TransRoboOwl.svg'
const Home = (): React.ReactElement => {
	return (
		<Styles.HomeContainer>
			<Styles.TitleContainer className='title-container'>
				<div className='nasa-title'>
					<p>Temple Space Exploration and Robotics</p>
				</div>
				<Styles.LargeText>Shoot for the moon with us!</Styles.LargeText>
				<Styles.SmallText>Visit us in the</Styles.SmallText>
				<Styles.Header>
					NASA space exploration and embedded systems lab <br/>
					(second floor of the engineering building)
				</Styles.Header>
			</Styles.TitleContainer>

			<Styles.VideoSource>
				<Button source={'https://www.youtube.com/watch?v=WeA7edXsU40'}
					text={'Video Source'} id={'vid-source'}/>
				<img src={nasaLogo} alt='NASA'/>
			</Styles.VideoSource>

			<Styles.SectionHeader>
				<h2>
					<img src={TOwl}
						alt='Owl'
						style={{
							width: '150px',   // Set the width of the image
							height: '150px', // Set the height of the image
							margin: '0 0 0 -100px',// Set the margin around the image
							float: 'left'
							// us a .docx

						}}
					/>
						We hope to see you at Temple Fest 2023!</h2>
				<div className='button-container'>
					<Button text={'Sign up here!'} size={'large'} source={'https://forms.gle/rp6BY6h4doLkZQ2E8'}/>
					<Button text='Join Teams Here!' source={`https://teams.microsoft.com/l/team/19%3aeaf903f
					d81cd48eba95d8e769ed78544%40thread.tacv2/conversations?groupId=8f78ecbb-62f3-4b2c-bda
					7-7488eca908ee&tenantId=716e81ef-b522-4473-8e31-10bd02ccf6e5`}/>
				</div>
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

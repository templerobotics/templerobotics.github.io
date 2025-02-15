// Third party
import React from 'react'

// Custom components
import PhotoGallery from '../general/photo-gallery/PhotoGallery'
import Contact from '../general/contact/Contact'

// Custom styles
import Styles, { MEET_THE_TEAM } from './RoboticMiningStyles'
import GALLERY_INFO from '../../data/RoboticsPhotoGalleryInfo'

// Images
// import robot from '../../assets/pics/robot/robot-2019.jpg'
import augerBot from '../../assets/pics/robot/augerbot-promotion.mp4'
import outreachPhoto1 from '../../assets/pics/outreach/vex.jpeg'
import outreachPhoto2 from '../../assets/pics/outreach/expo.jpeg'
import outreachPhoto3 from '../../assets/pics/outreach/interview.jpeg'
import title from '../../assets/pics/logos/robotics-red.png'
import RmcDescription from './SectionDescription'

const RoboticMining = (): React.ReactElement => {
	return (
		<Styles.RmcContainer>
			<Styles.TitleContainer className='title-container'>
				<img width='80%' src={title} alt='Temple Robotics'/>
				<p className='large-text'>We make robots and stuff</p>
				<p className='small-text'>Visit us in the</p>
				<h4>
					Student space exploration and embedded systems lab <br/>
					(second floor of the engineering building)
				</h4>
			</Styles.TitleContainer>

			{/* TODO: Put the updated robot in here */}
			<RmcDescription
				title='What is it?'
				img={augerBot}
				description='The NASA Robotics Mining Competition is a competition in which university-level students design
				and build a mining robot that can traverse the simulated Martian chaotic terrain. See our robot
				to the right!'
				src='https://www.nasa.gov/offices/education/centers/kennedy/technology/nasarmc.html'
				video/>

			<Styles.SpaceBackground>
				<Styles.MeetTheTeam className='meet-the-team-gallery' galleryInfo={ MEET_THE_TEAM } title={ 'Meet the Team' }/>

				<Styles.OutreachGallery>
					<h2>Outreach and Events</h2>
					<div className='outreach-slide'>
						<h2>Vex State Sectionals</h2>
						<p>
							Our team members volunteered at the competition to help judge notebooks ref the playing the
							field and interview teams for award selection.
						</p>
					</div>
					<div className='outreach-image-container'>
						<img src={ outreachPhoto1 } />
					</div>
					<div className='outreach-image-container'>
						<img src={ outreachPhoto2 } />
					</div>
					<div className='outreach-slide'>
						<h2>Philadelphia Robotics Expo</h2>
						<p>
							Our tabling event at the Philadelphia Robotics Expo where about 300 high school student came to see
							what philadelphia had to offer in robotics.
						</p>
					</div>
					<div className='outreach-slide'>
						<h2>Temple University TV</h2>
						<p>
							Our faculty advisor Dr. Helferty, a former NASA employee, talks about how starting Temple Robotics
							and what it has become today.
						</p>
					</div>
					<div className='outreach-image-container'>
						<img src={ outreachPhoto3 }/>
					</div>
				</Styles.OutreachGallery>

				<PhotoGallery className='testing' galleryInfo={ GALLERY_INFO }/>
			</Styles.SpaceBackground>

			<Contact/>
		</Styles.RmcContainer>
	)
}

export default RoboticMining

// Third party
import React from 'react'
import { AiOutlineDash } from 'react-icons/ai'

// Custom components
import Contact from '../general/contact/Contact'
//import SectionDescription from '../robotic-mining/SectionDescription'

// Custom styles
import Styles from './MeetTheLeadsStyles'

// Images
//import balloon from '../../assets/vids/ballooning-vid.mp4'
import JaredsFace from '../../assets/pics/Leads/jareds_face.jpg'
//import JaysFace from '../../assets/pics/Leads/Jays_Face.jpg'
//import StevensFace from '../../assets/pics/Leads/Stevens_Face.jpg'
//import GraysonsFace from '../../assets/pics/Leads/Graysons_face.png'
// a separator is needed for some reason, troubleshoot this or create a very small section div or style this like the robotics page
//use robotics format
//bakround is implemented but sections are not made to be compatible, change to gallery sections
const MeetTheLeads = (): React.ReactElement => {
	return (

		<Styles.MeetTheLeadsContainer>
			<Styles.TitleContainer className='title-container'>
				<h2 className='title'>Meet The Leads</h2>
				<AiOutlineDash/>
			</Styles.TitleContainer>
			<Styles.SpaceBackground>
				<Styles.LeadsGallery>
					<h2></h2>
					<div className='outreach-slide'>
						<h2>Vex State Sectionals</h2>
						<p>
							Our team members volunteered at the competition to help judge notebooks ref the playing the
							field and interview teams for award selection.
						</p>
					</div>
					<div className='outreach-image-container'>
						<img src={ JaredsFace } />
					</div>
					<div className='outreach-image-container'>
						<img src={ JaredsFace } />
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
						<img src={ JaredsFace }/>
					</div>
					
				</Styles.LeadsGallery>
			</Styles.SpaceBackground>s
			<Contact/>
		</Styles.MeetTheLeadsContainer>
	)
}

export default MeetTheLeads

// Third party
import React from 'react'
import { AiOutlineDash } from 'react-icons/ai'

// Custom components
import Contact from '../general/contact/Contact'
//import SectionDescription from '../robotic-mining/SectionDescription'

// Custom styles
import Styles from './MeetTheLeadsStyles'

// Images
import JaredsFace from '../../assets/pics/Leads/jareds_face.jpg'
import JaysFace from '../../assets/pics/Leads/Jays_Face.jpg'
import StevensFace from '../../assets/pics/Leads/Stevens_Face.jpg'
import GraysonsFace from '../../assets/pics/Leads/Graysons_face.jpg'
import TanishkasFace from '../../assets/pics/Leads/Tanishkas_face.jpg'
import RoccosFace from '../../assets/pics/Leads/roccos_face.jpg'
import NasiersFace from '../../assets/pics/Leads/Nasiers_face.jpg'
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
					<div className='leads-slide'>
						<h2>Meet our President!</h2>
						<p>
							Jared Levin and any info
						</p>
					</div>
					<div className='Leads-img-container'>
						<img src={ JaredsFace } />
					</div>
					<div className='Leads-img-container'>
						<img src={ JaysFace }/>
					</div>
					<div className='leads-slide'>
						<h2>Meet our vice president!</h2>
						<p>
							Jay Pande
						</p>
					</div>
					<div className='leads-slide'>
						<h2>Meet our Electrical Lead!</h2>
						<p>
							Grayson Cooper
						</p>
					</div>
					<div className='Leads-img-container'>
						<img src={ GraysonsFace}/>
					</div>
					<div className='Leads-img-container'>
						<img src={ StevensFace}/>
					</div>
					<div className='leads-slide'>
						<h2>Meet our Mechanical Lead!</h2>
						<p>
							Steven Miller
						</p>
					</div>
					<div className='leads-slide'>
						<h2>Meet our Web Manager!</h2>
						<p>
							Nasier Fowlkes
						</p>
					</div>
					<div className='Leads-img-container'>
						<img src={ NasiersFace }/>
					</div>
					<div className='Leads-img-container'>
						<img src={ RoccosFace }/>
					</div>
					<div className='leads-slide'>
						<h2>Meet our Workshop Manager</h2>
						<p>
							Rocco Guzman
						</p>
					</div>
					<div className='leads-slide'>
						<h2>Meet our project Manager</h2>
						<p>
							Tanishka Shah
						</p>
					</div>
					<div className='Leads-img-container'>
						<img src={ TanishkasFace }/>
					</div>

				</Styles.LeadsGallery>
			</Styles.SpaceBackground>
			<Contact/>
		</Styles.MeetTheLeadsContainer>
	)
}

export default MeetTheLeads

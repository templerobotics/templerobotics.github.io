// Third party
import React from 'react'
import { AiOutlineDash } from 'react-icons/ai'

// Custom components
import Contact from '../general/contact/Contact'
//import SectionDescription from '../robotic-mining/SectionDescription'

// Custom styles
import Styles from './MeetTheLeadsStyles'

// Images
import TanishkasFace from '../../assets/pics/Leads/Tanishkas_face.jpg'
import RoccosFace from '../../assets/pics/Leads/roccos_face.jpg'
import MalinsFace from '../../assets/pics/Leads/Malins_face.jpg'
import BriansFace from '../../assets/pics/Leads/Brians_face.jpg'
import AlessiasFace from '../../assets/pics/Leads/Alessia_headshot.png'
import JonahsFace from '../../assets/pics/Leads/Jonah_face.jpeg'
import JadensFace from '../../assets/pics/Leads/Jadens_face.jpeg'
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
							Rocco Guzman
						</p>
					</div>
					<div className='Leads-img-container'>
						<img src={ RoccosFace } />
					</div>
					<div className='Leads-img-container'>
						<img src={ MalinsFace }/>
					</div>
					<div className='leads-slide'>
						<h2>Meet our Vice President!</h2>
						<p>
							Malin Kussi
						</p>
					</div>
					<div className='leads-slide'>
						<h2>Meet our Electrical Lead!</h2>
						<p>
							Jaden Howard
						</p>
					</div>
					<div className='Leads-img-container'>
						<img src={ JadensFace }/>
					</div>
					<div className='Leads-img-container'>
						<img src={ AlessiasFace}/>
					</div>
					<div className='leads-slide'>
						<h2>Meet our Mechanical Lead!</h2>
						<p>
							Alessia Smith
						</p>
					</div>
					<div className='leads-slide'>
						<h2>Meet our Programming Lead!</h2>
						<p>
							Brian Ervin
						</p>
					</div>
					<div className='Leads-img-container'>
						<img src={ BriansFace }/>
					</div>
					<div className='Leads-img-container'>
						<img src={ TanishkasFace }/>
					</div>
					<div className='leads-slide'>
						<h2>Meet our Project Manager!</h2>
						<p>
							Tanishka Shah
						</p>
					</div>
					<div className='leads-slide'>
						<h2>Meet our Shop Manager!</h2>
						<p>
							Jonah Tesler
						</p>
					</div>
					<div className='Leads-img-container'>
						<img src={ JonahsFace }/>
					</div>
				</Styles.LeadsGallery>
			</Styles.SpaceBackground>
			<Contact/>
		</Styles.MeetTheLeadsContainer>
	)
}

export default MeetTheLeads

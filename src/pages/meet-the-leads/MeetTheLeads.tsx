// Third party
import React from 'react'
import { AiOutlineDash } from 'react-icons/ai'

// Custom components
import Contact from '../general/contact/Contact'
//import SectionDescription from '../robotic-mining/SectionDescription'

// Custom styles
import Styles from './MeetTheLeadsStyles'

// Images
import JadensFace from '../../assets/pics/Leads/Jaden_face.jpeg'
import GuysFace from '../../assets/pics/Leads/Guy_face.png'
import MalinsFace from '../../assets/pics/Leads/Malin_face.jpg'
import PenelopesFace from '../../assets/pics/Leads/Penelope_face.png'
import AlessiasFace from '../../assets/pics/Leads/Alessia_face.png'
import DamiensFace from '../../assets/pics/Leads/Damien_face.png'
import DevinsFace from '../../assets/pics/Leads/Devin_face.png'
import JavisFace from '../../assets/pics/Leads/Javi_face.png'
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
							Malin Kussi
						</p>
					</div>
					<div className='Leads-img-container'>
						<img src={ MalinsFace } />
					</div>
					<div className='Leads-img-container'>
						<img src={ GuysFace }/>
					</div>
					<div className='leads-slide'>
						<h2>Meet our Vice President!</h2>
						<p>
							Guy Porter
						</p>
					</div>
					<div className='leads-slide'>
						<h2>Meet our Electrical Lead!</h2>
						<p>
							Damien Ortiz
						</p>
					</div>
					<div className='Leads-img-container'>
						<img src={ DamiensFace }/>
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
							Penelope Fulwood
						</p>
					</div>
					<div className='Leads-img-container'>
						<img src={ PenelopesFace }/>
					</div>
					<div className='Leads-img-container'>
						<img src={ JavisFace }/>
					</div>
					<div className='leads-slide'>
						<h2>Meet our Chief of Marketing & Development!</h2>
						<p>
							Javier Price-Butler
						</p>
					</div>
					<div className='leads-slide'>
						<h2>Meet our Secretary!</h2>
						<p>
							Jaden Peiffer
						</p>
					</div>
					<div className='Leads-img-container'>
						<img src={ JadensFace }/>
					</div>
					<div className='Leads-img-container'>
						<img src={ DevinsFace }/>
					</div>
					<div className='leads-slide'>
						<h2>Meet our Treasurer!</h2>
						<p>
							Devin Huynh
						</p>
					</div>
				</Styles.LeadsGallery>
			</Styles.SpaceBackground>
			<Contact/>
		</Styles.MeetTheLeadsContainer>
	)
}

export default MeetTheLeads

// Third party
import React from 'react'
import { AiOutlineDash } from 'react-icons/ai'

// Custom components
import Contact from '../general/contact/Contact'
//import SectionDescription from '../robotic-mining/SectionDescription'

// Custom styles
import Styles from './MeetTheLeadsStyles'

// Images
import IsabellesFace from '../../assets/pics/Leads/Isabelle_Mingo.jpg'
import DamiensFace from '../../assets/pics/Leads/Damien_Ortiz.jpg'
import EsthersFace from '../../assets/pics/Leads/Esther_Peralta.png'
import AblantesFace from '../../assets/pics/Leads/Ablante_Fesseha.png'
import DiegosFace from '../../assets/pics/Leads/Diego_Catala.jpg'
import SehajFace from '../../assets/pics/Leads/Sehaj_Varma.jpg'
import ThierryFace from '../../assets/pics/Leads/Thierry_Desormeaux.jpg'

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
							Damien Ortiz
						</p>
					</div>
					<div className='Leads-img-container'>
						<img src={ DamiensFace } />
					</div>
					<div className='Leads-img-container'>
						<img src={ IsabellesFace }/>
					</div>
					<div className='leads-slide'>
						<h2>Meet our Vice President!</h2>
						<p>
							Isabelle Mingo
						</p>
					</div>
					<div className='leads-slide'>
						<h2>Meet our Electrical Lead!</h2>
						<p>
							Esther Peralta
						</p>
					</div>
					<div className='Leads-img-container'>
						<img src={ EsthersFace }/>
					</div>
					<div className='Leads-img-container'>
						<img src={ DiegosFace}/>
					</div>
					<div className='leads-slide'>
						<h2>Meet our Mechanical Lead!</h2>
						<p>
							Diego Catala-Velez
						</p>
					</div>
					<div className='leads-slide'>
						<h2>Meet our Programming Lead!</h2>
						<p>
							Thierry Lendell Desormeaux
						</p>
					</div>
					<div className='Leads-img-container'>
						<img src={ ThierryFace }/>
					</div>
					<div className='leads-slide'>
						<h2>Meet our Secretary!</h2>
						<p>
							Sehaj Varma
						</p>
					</div>
					<div className='Leads-img-container'>
						<img src={ SehajFace }/>
					</div>
					<div className='Leads-img-container'>
						<img src={ AblantesFace }/>
					</div>
					<div className='leads-slide'>
						<h2>Meet our Treasurer!</h2>
						<p>
							Ablante Fesseha
						</p>
					</div>
				</Styles.LeadsGallery>
			</Styles.SpaceBackground>
			<Contact/>
		</Styles.MeetTheLeadsContainer>
	)
}

export default MeetTheLeads

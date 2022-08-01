// Third party
import React from 'react'
import { AiOutlineDash } from 'react-icons/ai'

// Custom components
import Contact from '../general/contact/Contact'

// Custom styles
import Styles from './BallooningStyles'

const Ballooning = (): React.ReactElement => {
	return (
		<Styles.BallooningContainer>
			<Styles.TitleContainer className='title-container'>
				<h2 className='title'>Nasa Ballooning</h2>
				<AiOutlineDash/>
			</Styles.TitleContainer>

			<Contact/>
		</Styles.BallooningContainer>
	)
}

export default Ballooning


// Third party
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { isMobile } from 'react-device-detect'
import styled from 'styled-components'

// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalStyles from './tools/OverallStyling'

// Custom Components
import Navigation from './pages/general/navigation/Navigation'
import Home from './pages/home/Home'
import Sponsors from './pages/sponsors/Sponsors'
import Events, { getEventToasts } from './pages/events/Events'
import RoboticMining from './pages/robotic-mining/RoboticMining'
import Copyright from './pages/general/copyright/Copyright'
import Rocksat from './pages/rocksat/Rocksat'
import Ballooning from './pages/ballooning/Ballooning'
import NoMatch404 from './pages/general/NoMatch404'
import spaceBackground from './assets/pics/outreach/space-background.jpeg'

// Images
import backgroundVideo1 from './assets/vids/nasa-vid-1.webm'
import { PATHS } from './tools/Constants'
import MeetTheLeads from './pages/meet-the-leads/MeetTheLeads'

class Styles {
	static readonly AppContainer = styled.div<{height: number}>`
		min-height: ${props => props.height + 'px'};
	`

	static readonly Content = styled.div<{height: number}>`
		min-height: ${props => props.height + 'px'};
		display: grid;
	`
}

const App = (): React.ReactElement => {
	// Used for Sign-Ups
	useEffect(() => { getEventToasts() })
	const height = window.innerHeight

	const getBackground = (): React.ReactElement => {
		if (isMobile) {
			return (
				<img src={spaceBackground} id='video-background'/>
			)
		} else {
			return (
				<video loop muted autoPlay playsInline id='video-background'>
					<source src={backgroundVideo1} type='video/webm'/>
				</video>
			)
		}
	}

	return (
		<Styles.AppContainer height={height}>
			<ToastContainer style={{fontSize: 'var(--bs-body-font-size)'}}/>
			{getBackground()}
			<GlobalStyles/>
			{/* The basename is if this is not a org website <Router basename='website-2.0'> */}
			<Styles.Content height={height}>
				<Router>
					<div className='App'>
						<Navigation/>
						<div className='content'>
							{/* Define routes within the website */}
							<Routes>
								<Route path='/' element={<Home/>}/>
								<Route path={PATHS.HOME} element={<Home/>}/>
								<Route path={PATHS.EVENTS} element={<Events/>}/>
								<Route path={PATHS.ROBOTICS} element={<RoboticMining/>}/>
								<Route path={PATHS.SPONSORS} element={<Sponsors/>}/>
								<Route path={PATHS.ROCKSAT} element={<Rocksat/>}/>
								<Route path={PATHS.BALLOONING} element={<Ballooning/>}/>
								<Route path={PATHS.MEETTHELEADS} element={<MeetTheLeads/>}/>
								{/* If no path was matched, go to 404 page */}
								<Route path='*' element={<NoMatch404/>}/>
							</Routes>
						</div>
					</div>
				</Router>
				<Copyright/>
			</Styles.Content>
		</Styles.AppContainer>
	)
}

export default App

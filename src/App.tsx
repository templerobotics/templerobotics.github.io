
// Third party
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalStyles from './tools/OverallStyling'

// Custom Components
import Navigation from './pages/general/navigation/Navigation'
import Home from './pages/home/Home'
import Sponsors from './pages/sponsors/Sponsors'
import Events from './pages/events/Events'
import RoboticMining from './pages/robotic-mining/RoboticMining'
import Copyright from './pages/general/copyright/Copyright'
import Rocksat from './pages/rocksat/Rocksat'
import Ballooning from './pages/ballooning/Ballooning'
import NoMatch404 from './pages/general/NoMatch404'

// Images
import backgroundVideo1 from './assets/vids/nasa-vid-1.mp4'
import backgroundVideo2 from './assets/vids/nasa-vid-2.mp4'
import { PATHS } from './tools/Constants'

const App = (): React.ReactElement => {
	return (
		<>
			<video loop muted autoPlay playsInline id='video-background'>
				<source src={backgroundVideo1} type='video/mp4'/>
				<source src={backgroundVideo2} type='video/mp4'/>
			</video>
			<GlobalStyles/>
			{/* The basename is if this is not a org website <Router basename='website-2.0'> */}
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
							{/* If no path was matched, go to 404 page */}
							<Route path='*' element={<NoMatch404/>}/>
						</Routes>
					</div>
				</div>
			</Router>
			<Copyright/>
		</>
	)
}

export default App

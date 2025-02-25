// Third party
import React, { useState } from 'react'
import { Navbar, NavLink, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// Custom styles
import Styles from './NavigationStyles'

// General tools
import * as Constants from '../../../tools/Constants'
import { getScrollY, useWindowSize, scrollToTop } from '../../../tools/HelpfulFunctions'

// Images
import nasaLogo from '../../../assets/pics/logos/nasa.png'

const Navigation = (): React.ReactElement => {
	const { scroll } = getScrollY()
	const { width } = useWindowSize()
	const TEAMS = `https://teams.microsoft.com/l/team/19%3aeaf903fd81cd48eba95d8e769ed78544%40thread.tacv2/conversations?groupId=8f
		78ecbb-62f3-4b2c-bda7-7488eca908ee&tenantId=716e81ef-b522-4473-8e31-10bd02ccf6e5`

	// State for handling dropdown hover
	const [showDropdown, setShowDropdown] = useState(false)

	return (
		<>
			{/* The rest of the navigation bar. The className is dependent on whether the navbar is expanded or not */}
			<Styles.NavigationBar id='navbar-transition'
				transparency={ scroll <= 10 && width > Constants.MOBILE_SIZE ? 1 : 0 }
				toggle={ width < Constants.MOBILE_SIZE ? 1 : 0 }
				sticky='top' bg='dark' variant='dark' expand='md' collapseOnSelect>
				{/* Top left of the navigation bar */}
				<Styles.Logo className='logo-and-title'>
					<Link className='logo-container' to='/home'>
						<img alt='logo' src={nasaLogo} id='web-logo' onClick={scrollToTop}/>
						<div>
							<p>Temple Space</p>
							<p>Exploration</p>
						</div>
					</Link>
				</Styles.Logo>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse className='basic-navbar-links'>
					<Styles.NavbarLinks variant='pills' toggle={ width < Constants.MOBILE_SIZE ? 1 : 0 }>
						<NavLink eventKey='7' as={Link} to={Constants.PATHS.HOME} onClick={() => location.href = TEAMS}>Teams</NavLink>
						<NavLink eventKey='1' as={Link} to={Constants.PATHS.HOME} onClick={scrollToTop}>Home</NavLink>
						<NavLink eventKey='2' as={Link} to={Constants.PATHS.EVENTS} onClick={scrollToTop}>Events</NavLink>
						<NavLink eventKey='3' as={Link} to={Constants.PATHS.SPONSORS} onClick={scrollToTop}>Sponsors</NavLink>
						{/* Projects Dropdown - Opens on Hover */}
						<NavDropdown
							title='Projects'
							id='projects-dropdown'
							show={showDropdown}
							onMouseEnter={() => setShowDropdown(true)}
							onMouseLeave={() => setShowDropdown(false)}
							className='nav-link'>
							<NavDropdown.Item as={Link} to={Constants.PATHS.ROBOTICS} onClick={scrollToTop}>
								Robotics
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} to={Constants.PATHS.ROCKSAT} onClick={scrollToTop}>
								RockSat
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} to={Constants.PATHS.BALLOONING} onClick={scrollToTop}>
								NASA Ballooning
							</NavDropdown.Item>
						</NavDropdown>
					</Styles.NavbarLinks>
				</Navbar.Collapse>
			</Styles.NavigationBar>
		</>
	)
}

export default Navigation

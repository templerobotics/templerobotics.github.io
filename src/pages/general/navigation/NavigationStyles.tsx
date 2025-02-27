import styled from 'styled-components'
import { Navbar, Nav } from 'react-bootstrap'
import { COLORS, FONT_FAMILY } from '../../../tools/Constants'

export default class NavigationStyles {

	/* NavBar background color */
	static NavigationBar = styled(Navbar)<{transparency: boolean, toggle: boolean}>`
		padding: 0%;
		background-color: ${props => props.transparency ? 'transparent' : `${COLORS.PRIMARY}`} !important;
		transition: background-color 0.5s;
		height: max(calc(var(--vh) * .04), 50px);


		& > .navbar-collapse {
			margin: ${props => props.toggle ? '0 !important' : 'inherit'};
    		background-color: ${props => props.toggle ? `${COLORS.PRIMARY} !important` : 'transparent'};
		}

		/* The navbar items (nav-links) container */
		& > .basic-navbar-links {
			margin-right: 5%;
    		justify-content: flex-end;
		}
	`

	static Logo = styled(Navbar.Brand)`
		margin-right: 5%;
		padding-left: 3%;
		padding-right: 3%;
		background: linear-gradient(90deg, ${COLORS.PRIMARY}, ${COLORS.PRIMARY}7f);
		height: 100%;

		& > .logo-container {
			height: 100%;
			display: flex;
			column-gap: 7%;
			align-items: center;
			justify-content: center;
			text-decoration: none;
		}

		& > .logo-container > img {
			height: 100%;
		}

		& > .logo-container > div > p {
			text-align: center;
			${FONT_FAMILY.BODY}
			color: ${COLORS.TEXT};
			margin: 0;
			font-size: max(calc(var(--vh) * .012), 10px);
		}

		:hover {
			background: linear-gradient(90deg, ${COLORS.SELECTED}, ${COLORS.PRIMARY}7f, ${COLORS.SELECTED});
			cursor: pointer;
		}
	`

	static NavbarLinks = styled(Nav)<{toggle: boolean}>`
		& > a.nav-link.active {
			background-color: ${props => props.toggle ? `${COLORS.SELECTED}` : 'transparent'} !important;
		}

		& > a.nav-link:hover {
			color: ${COLORS.HOVER_TEXT} !important;
			background-color: ${props => props.toggle ? `${COLORS.SELECTED}` : 'transparent'} !important;
		}

		& > a.nav-link {
			color: ${COLORS.TEXT} !important;
			padding-left: 5%;
			font-size: 18px;
		}
		
		/* Dropdown Styling */
		.nav-item {
			position: relative;
			padding: 4px 8px 8px 8px;
		}

		div.nav-item{
			position: relative;
			padding: 2px 0px 0px 0px;
		}

		a.dropdown-toggle {
			background-color: ${props => props.toggle ? `${COLORS.SELECTED}` : 'transparent'} !important;
			color: ${COLORS.TEXT} !important;
			font-size: 17px;
			padding: 6px 8px 8px 8px;
		}

		.dropdown-menu {
			position: absolute;
			background-color: ${COLORS.PRIMARY} !important;
			padding: 0px 8px 8px 16px;
			border: none;
		}

		.dropdown-item {
			color: ${COLORS.TEXT} !important;
			background-color: ${props => props.toggle ? `${COLORS.SELECTED}` : 'transparent'} !important;
			font-size: 15px;
			border: none;
			padding: 0px
		}

		.dropdown-item:hover {
			background-color: ${props => props.toggle ? `${COLORS.SELECTED}` : 'transparent'} !important;
			color: ${COLORS.HOVER_TEXT} !important;
		}
	`
}

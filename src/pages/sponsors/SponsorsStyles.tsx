import styled from 'styled-components'
import { FONT_FAMILY } from '../../tools/Constants'

export class SponsorImages {
	static readonly arrow = require('../../assets/pics/sponsors/arrow.png')
	static readonly nasa = require('../../assets/pics/sponsors/nasa-name.png')
	static readonly hillock = require('../../assets/pics/sponsors/hillock-anodizing.png')
}

export default class SponsorsStyles {
	static readonly SponsorContainer = styled.div`
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows:
			calc(var(--vh) * .2)   /* Title container */
			calc(var(--vh) * .3)   /* Sponsor container */
			calc(var(--vh) * .3)   /* Sponsor container */
			calc(var(--vh) * .3)   /* Sponsor container */
			max(calc(var(--vh) * .15), 100px);   /* Contacts */

		& > .img-container {
			display: flex;
			background: black;
			padding: 5%;
		}

		& > .img-container > img {
			width: 100%;
			align-self: center;
		}
	`

	static readonly TitleContainer = styled.div`
		width: 100%;
		& > .title {
			${FONT_FAMILY.PAGE_TITLE}
		}
	`
}

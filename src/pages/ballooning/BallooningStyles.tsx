import styled from 'styled-components'
import { FONT_FAMILY } from '../../tools/Constants'

export default class BallooningStyles {
	static readonly BallooningContainer = styled.div`
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows:
			calc(var(--vh) * .2)   /* Title container */
			calc(var(--vh) * .4)   /* Sponsor container */
			max(calc(var(--vh) * .15), 100px);   /* Contacts TODO: Make into global variable */ 

		& > .img-container {
			display: flex;
			background: black;
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

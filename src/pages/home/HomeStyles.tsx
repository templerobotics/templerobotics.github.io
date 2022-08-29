import styled from 'styled-components'

import Button from '../general/button/Button'
import { COLORS, FONT_FAMILY } from '../../tools/Constants'

export default class HomeStyles {

	static readonly HomeContainer = styled.div`
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: 
			max(calc(var(--vh) * .35), 250px)   	/* Intro heading */
			calc(var(--vh) * .06)   			/* Intro heading button */
			calc(var(--vh) * .15)   			/* Program section heading */
			calc(var(--vh) * .4)    			/* Carousel */
			max(calc(var(--vh) * .3), 100px)   	/* Sponsors section heading */
			max(calc(var(--vh) * .15), 70px);  /* Contacts */
		justify-content: center;
	`

	static readonly TitleContainer = styled.div`
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		& > .nasa-title {
			height: calc(var(--vh) * .1);
			display: flex;
			align-items: center;
		}

		& > .nasa-title > img {
			height: 100%;
		}

		& > .nasa-title > p {
			${FONT_FAMILY.TITLE}
		}
	`

	static readonly LargeText = styled.p`
		font-family: 'arca', 'Lato', 'Helvetica', 'Arial', 'sans-serif';
		font-size: 2vw;
		letter-spacing: 5px;
		line-height: 3;
		text-transform: uppercase;
	`

	static readonly SmallText = styled.p`
		font-family: 'Futura', 'Helvetica', 'Arial', 'sans-serif';
		font-size: 10px;
		letter-spacing: 9px;
		text-transform: uppercase;
		margin-top: 40px;
	`

	static readonly Header = styled.h4`
		${FONT_FAMILY.SUBTITLE}
	`

	static readonly SectionHeader = styled.div`
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding-left: 15%;
		padding-right: 15%;
		background: linear-gradient(200deg, ${COLORS.PRIMARY}, #996b72, ${COLORS.PRIMARY});
		row-gap: 10%;

		& > h2 {
			text-align: center;
			${FONT_FAMILY.SECONDARY_TITLE}
		}

		& > .button-container {
			width: 100%;
			display: flex;
			column-gap: 10%;
			justify-content: center;
		}
	`

	static readonly VideoSource = styled(Button)`
		margin-left: 5%;
		margin-bottom: 5%;
		align-self: flex-start !important;
	`
}

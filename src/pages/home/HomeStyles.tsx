import styled from 'styled-components'

import { COLORS, FONT_FAMILY } from '../../tools/Constants'
import TOwl from '../../assets/pics/logos/TransRoboOwl.svg'

export default class HomeStyles {

	static readonly HomeContainer = styled.div`
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: 
			max(calc(var(--vh) * .40), 250px)   	/* Intro heading */
			calc(var(--vh) * .1)   					/* Intro heading button */
			calc(var(--vh) * .3)   					/* Program section heading */
			calc(var(--vh) * .4)    				/* Carousel */
			max(calc(var(--vh) * .3), 100px)   		/* Sponsors section heading */
			max(calc(var(--vh) * .15), 70px);  		/* Contacts */
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

		& > .nasa-title > p {
			${FONT_FAMILY.TITLE}
		}
	`

	static readonly LargeText = styled.p`
		${FONT_FAMILY.SUBTITLE}
		letter-spacing: 5px;
		line-height: 3;
		text-transform: uppercase;
	`

	static readonly SmallText = styled.p`
		letter-spacing: 9px;
		text-transform: uppercase;
		margin-top: calc(var(--vh) * 0.08);
		${FONT_FAMILY.BODY}
		margin-bottom: 0;
	`

	static readonly Header = styled.h4`
		${FONT_FAMILY.SUBTITLE}
	`

	static readonly SectionHeaderGradient = styled.div`
		display: flex;
		height: 100%;
		background: linear-gradient(200deg, ${COLORS.PRIMARY}, #996b72, ${COLORS.PRIMARY});
	`

	static readonly SectionHeader = styled.div`
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-left: 10%;
		padding-right: 10%;
		background-image: url(${TOwl});
		background-repeat: no-repeat no-repeat;
		background-position: center;
		row-gap: 10%;
		height: 80%;
		align-self: center;

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

	static readonly MerchHeader = styled.div`
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

	static readonly VideoSource = styled.div`
		display: grid;
		grid-template-columns: 50% 50%;
		grid-template-rows: 100%;
		align-items: center;
		margin-bottom: calc(var(--vh) * .02);

		& > * {
			margin-left: 5%;
			margin-right: 5%;
		}

		& > img {
			height: 100%;
			justify-self: right;
		}
	`
}

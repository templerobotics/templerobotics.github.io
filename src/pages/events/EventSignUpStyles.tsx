import styled from 'styled-components'
import { COLORS, FONT_FAMILY } from '../../tools/Constants'

export interface EventSignUpProps {
	title: string,
	description: string,
	src: string
}

export default class EventSignUpStyles {
	static readonly SignUpContainer = styled.div<{hover: boolean}>`
		width: calc(var(--vh) * .15);
		height: calc(var(--vh) * .15);
		background-color: ${props => props.hover ? COLORS.SELECTED : COLORS.PRIMARY};
		border-radius: calc(var(--vh) * .02);
		color: 'white';
		text-align: center;
		align-items: center;
		display: flex;
		flex-direction: column;
		cursor: ${props => props.hover ? 'pointer' : 'default'};

		& > h2 {
			padding: 5%;
			${FONT_FAMILY.SUBTITLE};
			margin: 0;
		}

		& > div {
			height: 100%;
			align-self: center;
			${FONT_FAMILY.BODY};
			margin: 0;
			display: flex;
			align-items: center;
		}
	`
}

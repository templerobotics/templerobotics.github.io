import styled from 'styled-components'
import { FONT_FAMILY } from '../../tools/Constants'
import spaceBackground from '../../assets/pics/outreach/space-background.jpeg'

export default class MeetTheLeadsStyles {
	static readonly MeetTheLeadsContainer = styled.div`
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: 
			calc(var(--vh) * .4)    /* Intro heading */
			calc(var(--vh) * .4)    /* Robot and competition description */
			calc(var(--vh) * 1.7)   /* Outreach gallery and photo gallery */
			max(calc(var(--vh) * .15), 100px);  /* Contact info */
		justify-content: center;
		align-content: center;
	`

	static readonly TitleContainer = styled.div`
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		& > .large-text {
			${FONT_FAMILY.SUBTITLE}
			letter-spacing: 5px;
			line-height: 3;
			text-transform: uppercase;
		}

		& > .small-text {
			${FONT_FAMILY.BODY}
			letter-spacing: 9px;
			text-transform: uppercase;
			margin-top: calc(var(--vh) * .1);
			margin-bottom: 0;
		}

		& > h4 {
			${FONT_FAMILY.SUBTITLE}
		}
	`

	static readonly LeadsGallery = styled.div`
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		grid-template-rows: calc(var(--vh) * .1) repeat(3, minmax(0, 1fr));
		row-gap: 4%;
		column-gap: 4%;
		justify-items: center;
		align-items: center;
		text-align: center;

		& > h2 {
			${FONT_FAMILY.TITLE}
			grid-column-start: 1;
			grid-column-end: 3;
			text-align: center;
			margin: 0;
		}

		& > .outreach-image-container {
			height: 100%;
			overflow: hidden;
		}

		& > .outreach-image-container > img,
		& > .outreach-image-container > video {
			width:100%;
			min-height: 100%;
			object-fit: cover;
		}

		& > .outreach-slide > h2 {
			${FONT_FAMILY.SECONDARY_TITLE}
			margin-bottom: 5%;
		}

		& > .outreach-slide > p {
			padding-left: 20%;
			padding-right: 20%;
		}
	`

	static readonly SpaceBackground = styled.div`
		background-image: url(${spaceBackground});
		background-attachment: fixed;
		background-position: center;
		background-size: cover;
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: calc(var(--vh) * 1.2) calc(var(--vh) * 0.5);
		justify-items: center;
		align-items: center;
	`
}

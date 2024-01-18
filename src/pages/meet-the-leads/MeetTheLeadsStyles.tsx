import styled from 'styled-components'
import { FONT_FAMILY } from '../../tools/Constants'
import spaceBackground from '../../assets/pics/outreach/space-background.jpeg'

export default class MeetTheLeadsStyles {
	static readonly MeetTheLeadsContainer = styled.div`
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: 
			calc(var(--vh) * .2)    /* Intro heading */  
			calc(var(--vh) * 2.39)   /* Outreach gallery and photo gallery */
			max(calc(var(--vh) * .15), 100px);  /* Contact info */
		justify-content: center;
		align-content: center;

		@media (max-width: 718px) {
			display: grid;
			grid-template-columns: 100%;
			grid-template-rows: 
			calc(var(--vh) * .2)    /* Intro heading */  
			calc(var(--vh) * 2.65)   /* Outreach gallery and photo gallery */
			max(calc(var(--vh) * .15), 100px);  /* Contact info */
		justify-content: center;
		align-content: center;

		}

		
	`

	static readonly TitleContainer = styled.div`
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		& > .title {
			${FONT_FAMILY.PAGE_TITLE}
			font-size: calc(var(--vh) * .08);
		}
	`

	static readonly LeadsGallery = styled.div`
	    //grid of leads text and img squares
		display: grid;
		grid-template-columns: repeat(2	, minmax(0, 1fr));
		grid-template-rows: calc(var(--vh) * .4) repeat(6, minmax(0, 1fr)); 
		row-gap: 20px;
		column-gap: 4%;
		justify-items: center;
		align-items: center;
		text-align: center;
		margin-top: auto;

		& > h2 {
			${FONT_FAMILY.TITLE}
			grid-column-start: 1;
			grid-column-end: 3;
			text-align: center;
			margin: 0;
		}

		& > .Leads-img-container {
			height: 100%;
			overflow: hidden;
		}

		& > .Leads-img-container > img,
		& > .Leads-img-container > video {
			width:100%;
			min-height: 100%;
			object-fit: cover;

			@media (max-width: 718px) {
				object-fit: cover;
		}

		}

		& > .Leads-slide > h2 {
			${FONT_FAMILY.SECONDARY_TITLE}
			margin-bottom: 5%;
		}

		& > .Leads-slide > p {
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
		grid-template-rows: calc(var(--vh) * 1.4) calc(var(--vh) * 1);
		height: inherit;
		justify-items: center;
		align-items: center;

		
	`

	
}

import styled from 'styled-components'
import { FONT_FAMILY, RMC_TEAM } from '../../tools/Constants'
import { GalleryImage } from '../general/photo-gallery/PhotoGalleryStyles'
import spaceBackground from '../../assets/pics/outreach/space-background.jpeg'
import PhotoGallery from '../general/photo-gallery/PhotoGallery'

export const MEET_THE_TEAM: GalleryImage[] = [
	{ image: RMC_TEAM[0], title: 'Dr. John Helferty', description: 'Head Advisor' },
	{ image: RMC_TEAM[1], title: 'Rocco Gruzman', description: 'Robotic\'s President' },
	{ image: RMC_TEAM[2], title: 'Malin Kussi', description: 'Vice President' },
	{ image: RMC_TEAM[3], title: 'Jared Levin', description: 'Electrical Lead' },
	{ image: RMC_TEAM[4], title: 'Alessia Smith', description: 'Mechanical Lead' },
	{ image: RMC_TEAM[5], title: 'Brian Ervin', description: 'Programming Lead' },
	{ image: RMC_TEAM[6], title: 'Tanishka Shah', description: 'Project Manager' },
	{ image: RMC_TEAM[7], title: 'Jonah Tesler', description: 'Shop Manager' }
]

export default class RoboticMiningStyles {
	static readonly RmcContainer = styled.div`
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: 
			calc(var(--vh) * .4)    /* Intro heading */
			calc(var(--vh) * .4)    /* Robot and competition description */
			calc(var(--vh) * 2.15)  /* Outreach gallery and photo gallery */
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

	static readonly OutreachGallery = styled.div`
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
		grid-template-rows: calc(var(--vh) * 0.45) calc(var(--vh) * 1.2) calc(var(--vh) * 0.5);
		justify-items: center;
		align-items: center;
	`

	static readonly MeetTheTeam = styled(PhotoGallery)`
		& .gallery-title {
			font-size: calc(var(--vh) * .02) !important;
		}
	`
}

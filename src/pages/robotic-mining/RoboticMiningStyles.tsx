import styled from 'styled-components'
import { FONT_FAMILY, RMC_PHOTO_GALLERY, RMC_TEAM } from '../../tools/Constants'
import { GalleryImage } from '../general/photo-gallery/PhotoGalleryStyles'
import spaceBackground from '../../assets/pics/outreach/space-background.jpeg'
import PhotoGallery from '../general/photo-gallery/PhotoGallery'

export const MEET_THE_TEAM: GalleryImage[] = [
	{ image: RMC_TEAM[0], title: 'Dr. Helferty', description: 'The head advisor for the club.' },
	{ image: RMC_TEAM[1], title: 'Blake Bray', description: 'President. Class of 2023.' },
	{ image: RMC_TEAM[2], title: 'Ryan Hodge', description: 'Vice President. Class of 2023.' },
	{ image: RMC_TEAM[3], title: 'David Fiel', description: 'Project Lead. Class of 2023.' },
	{ image: RMC_TEAM[4], title: 'Thomas Demianovich', description: 'Systems Lead. Class of 2023.' },
	{ image: RMC_TEAM[5], title: 'Max Johnson', description: 'Treasurer. Class of 2023.' },
	{ image: RMC_TEAM[6], title: 'Mark Stitch', description: 'Electrical Lead. Class of 2023.' },
	{ image: RMC_TEAM[7], title: 'Jacob Shin', description: 'Programming. Class of 2022' }
]

export const GALLERY_INFO: GalleryImage[] = [
	{ image: RMC_PHOTO_GALLERY[0], title: '2022', description: `The 2022 robot is coming together! No belts yet but the
		chasses is complete` },
	{ image: RMC_PHOTO_GALLERY[1], title: '2022', description: 'I guess our team has never heard of cable management...' },
	{ image: RMC_PHOTO_GALLERY[2], title: '2022', description: `Us showing off JPL at the 30th anniversary of the NASA
		Space Grant.` },
	{ image: RMC_PHOTO_GALLERY[3], title: '2018', description: 'Our ME\'s filing away to make sure everything fits perfectly.' },
	{ image: RMC_PHOTO_GALLERY[4], title: '2018', description: 'BoxBot, of course we still love you.' },
	{ image: RMC_PHOTO_GALLERY[5], title: '2017', description: `Our team plugged the ethernet cable into the wrong port. 
		Good thing duct tape fixes everything!` },
	{ image: RMC_PHOTO_GALLERY[6], title: '2017', description: `Our hotel didn't like us working on the robot in our rooms. 
		I guess we'll just use our vans.` },
	{ image: RMC_PHOTO_GALLERY[7], title: '2011', description: 'The year our team\'s autonomous was so good they had to change the rules' },
	{ image: RMC_PHOTO_GALLERY[8], title: '2010', description: 'Scoops was born' },
	{ image: RMC_PHOTO_GALLERY[9], title: '2009', description: 'Our first team at the very first Robotics Mining Competition' }
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
			margin-top: 40px;
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
		& h3 {
			font-size: calc(var(--vh) * .02) !important;
			color: red;
		}
	`
}

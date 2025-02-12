import { Color } from './CustomTypes'

export const MOBILE_SIZE = 767

export const ANIMATION_TIME = '500ms'

export class PATHS {
	static readonly HOME: string = '/home'
	static readonly EVENTS: string = '/events'
	static readonly SPONSORS: string = '/sponsors'
	static readonly ROCKSAT: string = '/rocksat'
	static readonly ROBOTICS: string = '/robotics'
	static readonly BALLOONING: string = '/ballooning'
	static readonly MEETTHELEADS: string = '/MeetTheLeads'
}

export class COLORS {
	static readonly PRIMARY: Color = '#9D2235'
	static readonly SECONDARY: Color = '#8A8D8F'
	static readonly SECONDARY_DARK: Color = '#272b2f'
	static readonly THIRD: Color = '#52575b'
	static readonly SELECTED: Color = '#801c29'
	static readonly BACKGROUND: Color = '#9D2235'
	static readonly TEXT: Color = '#FFFFFF'
	static readonly HOVER_TEXT: Color = '#d1d1d1'
	static readonly LINK: Color = '#FFFFFF'
	static readonly BLUE: Color = '#516a8a'
	static readonly GREEN: Color = '#618a51'
	static readonly PURPLE: Color = '#75518a'
	static readonly SECONDARY_SCROLLBAR: Color = '#9d22357f'
}

export const RMC_TEAM = [
	require('../assets/pics/team/john-helferty.jpg'),
	require('../assets/pics/Leads/roccos_face.jpg'),
	require('../assets/pics/Leads/Malins_face.jpg'),
	require('../assets/pics/Leads/jareds_face.jpg'),
	require('../assets/pics/Leads/Alessia_headshot.png'),
	require('../assets/pics/Leads/Brians_face.jpg'),
	require('../assets/pics/Leads/Tanishkas_face.jpg'),
	require('../assets/pics/Leads/Jonah_Face.jpeg')
]

export const RMC_PHOTO_GALLERY = [
	require('../assets/pics/photo-gallery/rmc/comp-team-2024.jpg'),
	require('../assets/pics/photo-gallery/rmc/comp-team-2023.jpg'),
	require('../assets/pics/photo-gallery/rmc/arena-3.jpeg'),
	require('../assets/pics/photo-gallery/rmc/arena-2.jpeg'),
	require('../assets/pics/photo-gallery/rmc/arena-1.jpeg'),
	require('../assets/pics/photo-gallery/rmc/rmc-2022.jpg'),
	require('../assets/pics/photo-gallery/rmc/wire-mess.jpg'),
	require('../assets/pics/photo-gallery/rmc/jpl-display.jpeg'),
	require('../assets/pics/photo-gallery/rmc/club-filing.jpg'),
	require('../assets/pics/photo-gallery/rmc/box-bot.jpeg'),
	require('../assets/pics/photo-gallery/rmc/ethernet-screw-up.jpg'),
	require('../assets/pics/photo-gallery/rmc/bot-shop.jpeg'),
	require('../assets/pics/photo-gallery/rmc/rmc-2011.jpeg'),
	require('../assets/pics/photo-gallery/rmc/rmc-2010.jpeg'),
	require('../assets/pics/photo-gallery/rmc/rmc-2009.jpeg')
]

export const ROCKSAT_PHOTO_GALLERY = [
	require('../assets/pics/photo-gallery/rocksat/rocksat-2020.jpeg'),
	require('../assets/pics/photo-gallery/rocksat/rocksat-2019.jpeg'),
	require('../assets/pics/photo-gallery/rocksat/rocksat-2017.jpeg'),
	require('../assets/pics/photo-gallery/rocksat/rocksat-2016.png'),
	require('../assets/pics/photo-gallery/rocksat/rocksat-2015.jpeg'),
	require('../assets/pics/photo-gallery/rocksat/rocksat-2014-3.jpeg'),
	require('../assets/pics/photo-gallery/rocksat/rocksat-2014-2.jpeg'),
	require('../assets/pics/photo-gallery/rocksat/rocksat-2014-1.jpeg'),
	require('../assets/pics/photo-gallery/rocksat/rocksat-2011.bmp')
]

export class CSS_STYLES {

	/**
	 * @brief Make sure the scrollbar is visible in overflow
	 * @param path Path to where the scrollbar should be applied
	 * @param color Color of the scrollbar
	 * @returns The string for the css property
	 */
	static showScrollbar(path = '', color: Color = '#0000007f'): string {
		return `
			${path}::-webkit-scrollbar {
				-webkit-appearance: none;
				width: 7px;
			}

			${path}::-webkit-scrollbar-thumb {
				border-radius: 4px;
				background-color: ${color ?? 'rgba(0, 0, 0, .5)'};
				box-shadow: 0 0 1px rgba(255, 255, 255, .5);
				border: 1px solid rgba(255, 255, 255, .5);
			}
		`
	}
}

export class FONT_FAMILY {
	static readonly PAGE_TITLE = `
		margin: 0;
		font-family: 'Arca', 'Catamaran', 'Helvetica', 'Arial', 'sans-serif';
		font-weight: 500;
		font-size: calc(var(--vh) * .1);
		letter-spacing: 1px;
		line-height: 1.1;
		margin-left: 10%;
		margin-right: 10%;
	`

	static readonly TITLE = `
		font-family: 'Arca', 'Catamaran', 'Helvetica', 'Arial', 'sans-serif';
		font-weight: 200;
		font-size: calc(var(--vh) * .05);
		letter-spacing: 1px;
		line-height: 1.1;
		margin: 0;
	`

	static readonly SECONDARY_TITLE = `
		font-family: 'Arca', 'Catamaran', 'Helvetica', 'Arial', 'sans-serif';
		font-weight: 200;
		font-size: calc(var(--vh) * .04);
		letter-spacing: 1px;
		line-height: 1.1;
	`

	static readonly SUBTITLE = `
		font-family: 'Arca', 'Catamaran', 'Helvetica', 'Arial', 'sans-serif';
		font-weight: 200;
		font-size: calc(var(--vh) * .02);
		letter-spacing: 1px;
		line-height: 1.1;
	`

	static readonly BODY = `
		font-family: 'Futura', 'Helvetica', 'Arial', 'sans-serif';
		font-size: calc(var(--vh) * .012);
		line-height: 1.5;
		margin-bottom: 20px;
	`
}

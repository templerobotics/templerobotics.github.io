import { TextPictureSectionProps } from '@components/shared/TextPictureSection'

export const ballooningTextPictureData: TextPictureSectionProps = {
	text: `
		During the eclipse of 2017, NASA reached out to multiple schools across
		the country to help observe it, and Temple was one of those schools! Dr. Helferty
		led a team of engineers to new hights when deploying a balloon 90,000 to 130,000
		feet in the air with a 360 degree camera attached.
	`,
	video: {
		src: 'videos/ballooning.mp4'
	},
	button: {
		text: 'Learn More',
		path: 'https://engineering.temple.edu/news/news-solar-eclipse-sparks-new-heights-ballooning'
	}
}
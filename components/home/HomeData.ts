import slide1 from '@assets/images/carousel/originals/balloon-team.jpg'
import slide2 from '@assets/images/carousel/originals/rmc-team.jpg'
import slide3 from '@assets/images/carousel/originals/rocksat17.jpg'
import slide4 from '@assets/images/carousel/originals/comp-team-2024.jpg'

import { SlideProps } from '../shared/Carousel'

export const carouselSlides: SlideProps[] = [
	{
		title: 'Robotics',
		content: `
			The Robotics teams designs, builds and competes with a mining
			robot every year at the NASA Lunabotics Competition. Getting the
			chance to compete against other schools in Florida helps us improve
			our skills and represent Temple at a big event.
		`,
		image: slide4,
		buttons: [
			{ text: 'Learn more', path: '/robotics', internal: true }
		]
	},
	{
		title: 'ROCKSAT',
		content: `
			The RockSat Team designed a payload that will be placed inside of
			a sounding rocket which is provided by the Wallops Flight Facility.
			The rocket will launch at Wallops Island where it will follow a
			sub-orbital flight path into the Atlantic Ocean, reaching an estimated
			maximum height of 72 miles.
		`,
		image: slide3,
		buttons: [
			{ text: 'Learn more', path: '/rocksat', internal: true }
		]
	},
	{
		title: 'NASA RMC',
		content: `
			The NASA Robotics Mining Competition is a university-level student
			competition to design and build a mining robot that can traverse
			the challenging simulated Martian terrain. The mining robot must
			then excavate the regolith simulant and/or the ice simulant (gravel)
			and return the excavated mass for deposit into the collector bin to
			simulate an off-world, in situ resource mining mission.
		`,
		image: slide2,
		buttons: [
			{ text: 'Learn more', path: '/robotics', internal: true }
		]
	},
	{
		title: 'NASA Ballooning',
		content: `
			The Temple NASA Ballooning Team will participate as one of over
			fifty teams responsible for the design and production of an HAB that
			is capable of recording and streaming live video footage to the NASA
			website, a task which has never been attempted for a solar eclipse.
		`,
		image: slide1,
		buttons: [
			{ text: 'Learn more', path: '/ballooning', internal: true },
			{ text: 'Watch video', path: 'https://www.youtube.com/watch?v=rGMibNYSnRg' }
		]
	}
]
import { EventObject } from '../tools/CustomTypes'

// const semesterEnd = '12/11/23'

const EVENT_INFO: EventObject[] = [
	{
		title: 'General Body Meeting',
		description: `Learn more about the club and what we do! If you have any interest at all,
		we highly recommend you joining us!`,
		date: new Date('9/4/2024'),
		time: '5:00pm',
		location: 'The Fish Bowl (first floor pf the engineering building)'
	},
	{
		title: 'Weekly Programming Meeting',
		description: 'The weekly meeting for the programming sub-team. Take a look at the code for the robot and ',
		date: new Date(''),
		time: 'To Be Determined',
		location: 'The ideas hub (second floor of the engineering building)',
		weekly: true
		// endDate: new Date(semesterEnd)
	},
	{
		title: 'Weekly Electrical Meeting',
		description: 'The weekly meeting for the electrical sub-team. Talk about improved batteries, wiring, and more!',
		date: new Date(''),
		time: 'To Be Determined',
		location: 'The ideas hub (second floor of the engineering building)',
		weekly: true
		// endDate: new Date(semesterEnd)
	},
	{
		title: 'Weekly Mechanical Meeting',
		description: 'The weekly meeting for the mechanical sub-team. Learn about the design aspects of robot and 3D model parts.',
		date: new Date(''),
		time: 'To Be Determined',
		location: 'The ideas hub (second floor of the engineering building)',
		weekly: true
		// endDate: new Date(semesterEnd)
	},
	{
		title: 'First GBM of the Spring Semester',
		description: `Learn more about the club and what we do! If you have any interest at all,
			we highly recommend you joining us!`,
		date: new Date('1/29/24'),
		time: '',
		location: 'The Fish Bowl (first floor of the engineering building)'
	}
	// {
	// 	title: 'Engineering Week Showcase',
	// 	description: 'Meet us to see the robot in action and learn about the club!',
	// 	date: new Date(''),
	// 	time: '11:00 AM',
	// 	location: 'SERC Main Lobbby'
	// },
	// {
	// 	title: 'Temple Ambler Showcase',
	// 	description: 'Meet us to see the robot in action and learn about the club!',
	// 	date: new Date(''),
	// 	time: '9:15 AM',
	// 	location: 'Temple Ambler Widener'
	// }
]

export default EVENT_INFO

import { EventObject } from '../tools/CustomTypes'

// const semesterEnd = '12/11/23'

const EVENT_INFO: EventObject[] = [
	{
		title: 'Weekly Programming Meeting',
		description: 'The weekly meeting for the programming sub-team. Take a look at the code for the robot and ',
		date: new Date(''),
		time: '',
		location: 'The ideas hub (second floor of the engineering building)',
		weekly: true,
		// endDate: new Date(semesterEnd)
	},
	{
		title: 'Weekly Electrical Meeting',
		description: 'The weekly meeting for the electrical sub-team. Talk about improved batteries, wiring, and more!',
		date: new Date(''),
		time: '',
		location: 'The ideas hub (second floor of the engineering building)',
		weekly: true,
		// endDate: new Date(semesterEnd)
	},
	{
		title: 'Weekly Mechanical Meeting',
		description: 'The weekly meeting for the mechanical sub-team. Learn about the design aspects of robot and 3D model parts.',
		date: new Date(''),
		time: '',
		location: 'The ideas hub (second floor of the engineering building)',
		weekly: true,
		// endDate: new Date(semesterEnd)
	},
	{
		title: 'First GBM of the Spring Semester',
		description: `Learn more about the club and what we do! If you have any interest at all,
			we highly recommend you joining us!`,
		date: new Date(''),
		time: '',
		location: 'The ideas hub (second floor of the engineering building)'
	},
	{
		title: 'General Body Meeting',
		description: `Learn more about the club and what we do! If you have any interest at all,
		we highly recommend you joining us!`,
		date: new Date('2/16/23'),
		time: '6:00 PM',
		location: 'The ideas hub (second floor of the engineering building)'
	},
	{
		title: 'Engineering Week Showcase',
		description: 'Meet us to see the robot in action and learn about the club!',
		date: new Date('2/22/23'),
		time: '11:00 AM',
		location: 'SERC Main Lobbby'
	},
	{
		title: 'Temple Ambler Showcase',
		description: 'Meet us to see the robot in action and learn about the club!',
		date: new Date('4/21/23'),
		time: '9:15 AM',
		location: 'Temple Ambler Widener'
	}
]

export default EVENT_INFO

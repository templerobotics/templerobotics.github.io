import { EventObject } from '../tools/CustomTypes'

const semesterEnd = '5/31/25'
const descriptionForSDW1 = 'The goal of these classes is to equip you with the skills to model and design on a professional '
const descriptionForSDW2 = 'level, as well as create a common ground for all engineers to work together more efficiently and effectively'
const EVENT_INFO: EventObject[] = [
	{
		title: 'Weekly Solidworks Workshop',
		description: descriptionForSDW1 + descriptionForSDW2,
		date: new Date('2025-02-17T17:30:00'),
		location: 'The ideas hub (second floor of the engineering building)',
		weekly: true,
		endDate: new Date(semesterEnd)
	},
	{
		title: 'General Body Meeting',
		description: 'Updates on what happened since the last GBM and the plan for the rest of the semester as well as an activity',
		date: new Date('2025-02-05T17:00:00'),
		// location: 'The Fish Bowl (first floor pf the engineering building)'
		location: '201A classroom (The ideas hub second floor of the engineering building)'
	},
	{
		title: 'Weekly Programming Meeting',
		description: 'The weekly meeting for the programming sub-team. Take a look at the code for the robot',
		date: new Date('2025-01-22T17:00:00'),
		location: 'The ideas hub (second floor of the engineering building)',
		weekly: true,
		endDate: new Date(semesterEnd)
	},
	{
		title: 'Weekly Electrical Meeting',
		description: 'The weekly meeting for the electrical sub-team. Talk about improved batteries, wiring, and more!',
		date: new Date('2025-01-22T18:00:00'),
		location: 'The ideas hub (second floor of the engineering building)',
		weekly: true,
		endDate: new Date(semesterEnd)
	},
	{
		title: 'Weekly Mechanical Meeting',
		description: 'The weekly meeting for the mechanical sub-team. Learn about the design aspects of robot and 3D model parts.',
		date: new Date('2025-01-22T16:00:00'),
		location: 'The ideas hub (second floor of the engineering building)',
		weekly: true,
		endDate: new Date(semesterEnd)
	}
	// {
	// 	title: 'Weekly Programming Meeting',
	// 	description: 'The weekly meeting for the programming sub-team. Take a look at the code for the robot',
	// 	date: new Date('1/1/2025'),
	// 	time: '5:00pm',
	// 	location: 'The ideas hub (second floor of the engineering building)',
	// 	weekly: true,
	// 	endDate: new Date(semesterEnd)
	// },
	// {
	// 	title: 'Weekly Electrical Meeting',
	// 	description: 'The weekly meeting for the electrical sub-team. Talk about improved batteries, wiring, and more!',
	// 	date: new Date('1/2/2025'),
	// 	time: '6:00',
	// 	location: 'The ideas hub (second floor of the engineering building)',
	// 	weekly: true,
	// 	endDate: new Date(semesterEnd)
	// },
	// {
	// 	title: 'Weekly Mechanical Meeting',
	// 	description: 'The weekly meeting for the mechanical sub-team. Learn about the design aspects of robot and 3D model parts.',
	// 	date: new Date('1/2/2025'),
	// 	time: '4:00pm',
	// 	location: 'The ideas hub (second floor of the engineering building)',
	// 	weekly: true,
	// 	endDate: new Date(semesterEnd)
	// }
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

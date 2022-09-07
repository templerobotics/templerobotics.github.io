import { EventObject } from '../tools/CustomTypes'

const semesterEnd = '12/24/2022'

const EVENT_INFO: EventObject[] = [
	{
		title: 'Outreach Build Day Week 2',
		description: `Learn to build a robot! This series will focus on how to build a small robot from scratch!
			If you missed a previous build session, no problem!`,
		date: new Date('09/09/2022'),
		time: '5:00 PM',
		location: 'The ideas hub (second floor of the engineering building)'
	},
	{
		title: 'Outreach Build Day Week 3',
		description: `Learn to build a robot! This series will focus on how to build a small robot from
			scratch! If you missed a previous build session, no problem!`,
		date: new Date('09/23/2022'),
		time: '5:00 PM',
		location: 'The ideas hub (second floor of the engineering building)'
	},
	{
		title: 'Weekly General Body Meeting',
		description: 'Talk about the weekly progress of the club and future goals.',
		date: new Date('09/08/2022'),
		time: '6:00 PM',
		location: 'The ideas hub (second floor of the engineering building)',
		weekly: true,
		endDate: new Date(semesterEnd)
	},
	{
		title: 'Weekly Programming Meeting',
		description: 'The weekly meeting for the programming sub-team. Take a look at the code for the robot and ',
		date: new Date('09/12/2022'),
		time: '5:00 PM',
		location: 'The ideas hub (second floor of the engineering building)',
		weekly: true,
		endDate: new Date('09/07/2022')
	},
	{
		title: 'Weekly Electrical Meeting',
		description: 'The weekly meeting for the electrical sub-team. Talk about improved batteries, wiring, and more!',
		date: new Date('09/08/2022'),
		time: '5:00 PM',
		location: 'The ideas hub (second floor of the engineering building)',
		weekly: true,
		endDate: new Date(semesterEnd)
	},
	{
		title: 'Weekly Mechanical Meeting',
		description: 'The weekly meeting for the mechanical sub-team. Learn about the design aspects of robot and 3D model parts.',
		date: new Date('09/13/2022'),
		time: '5:00 PM',
		location: 'The ideas hub (second floor of the engineering building)',
		weekly: true,
		endDate: new Date(semesterEnd)
	}
]

export default EVENT_INFO

import { EventObject } from '../tools/CustomTypes'

const semesterEnd = '12/16/26'
const EVENT_INFO: EventObject[] = [

	
	{
		title: 'Weekly Programming Meeting',
		description: `The weekly meeting for the programming sub-team. Learn how to program the robot in ROS (Robot Operating System)
		 and more!`,
		date: new Date('2026-09-22T16:00:00'),
		location: 'The ideas hub (second floor of the engineering building)',
		weekly: true,
		endDate: new Date(semesterEnd),
		duration: 60 // 1 hour
	},
	{
		title: 'Weekly Electrical Meeting',
		description: `The weekly meeting for the electrical sub-team. Talk about improved batteries, wiring, custom motor controllers
		 and more!`,
		date: new Date('2026-09-21T18:00:00'),
		location: 'The ideas hub (second floor of the engineering building)',
		weekly: true,
		endDate: new Date(semesterEnd),
		duration: 60 // 1 hour
	},
	{
		title: 'Weekly Mechanical Meeting',
		description: `The weekly meeting for the mechanical sub-team. Learn about the design aspects of robot and 3D model parts.
		As well as machining and assembling the robot!`,
		date: new Date('2026-09-25T16:00:00'),
		location: 'The ideas hub (second floor of the engineering building)',
		weekly: true,
		endDate: new Date(semesterEnd),
		duration: 60 // 1 hour
	},
	{
		title: 'Lockheed Martin Information Session',
		description: 'Get a chance to gain insights on one of the largest engineering companies in the world and their hiring process.',
		date: new Date('2026-09-30T17:00:00'),
		location: 'Fishbowl (College of Engineering EN 102)'
	}
]

export default EVENT_INFO

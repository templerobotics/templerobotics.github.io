import { EventObject } from '../tools/CustomTypes'

const semesterEnd = '12/17/25'
const EVENT_INFO: EventObject[] = [
	// {
	// 	title: 'Weekly SolidWorks Workshop',
	// 	description: `The goal of these classes is to equip you with the skills to model and design on a professional
	// 		level, as well as create a common ground for all engineers to work together more efficiently and effectively`,
	// 	date: new Date('2025-03-10T17:30:00'),
	// 	location: 'The ideas hub (second floor of the engineering building)',
	// 	weekly: true,
	// 	endDate: new Date(semesterEnd),
	// 	duration: 90 // 1 hour 30 minutes
	// },
	{
		title: 'General Body Meeting',
		description: 'First GBM of the semester, talking about the goals for the year and updates on the competition.',
		date: new Date('2025-08-27T18:30:00'),
		location: 'Fishbowl (College of Engineering EN 102)'
	},
	{
		title: 'Lockheed Martin Recruitment event',
		description: `Lockheed Martin is coming out to talk to the members about recruitment opportunities 
			and food will be available as well`,
		date: new Date('2025-09-22T17:00:00'),
		location: 'Fishbowl (College of Engineering EN 102)'
	},
	{
		title: 'Weekly Programming Meeting',
		description: `The weekly meeting for the programming sub-team. Learn how to program the robot in ROS (Robot Operating System)
		 and more!`,
		date: new Date('2025-09-05T14:00:00'),
		location: 'The ideas hub (second floor of the engineering building)',
		weekly: true,
		endDate: new Date(semesterEnd),
		duration: 60 // 1 hour
	},
	{
		title: 'Weekly Electrical Meeting',
		description: `The weekly meeting for the electrical sub-team. Talk about improved batteries, wiring, custom motor controllers
		 and more!`,
		date: new Date('2025-09-08T17:00:00'),
		location: 'The ideas hub (second floor of the engineering building)',
		weekly: true,
		endDate: new Date(semesterEnd),
		duration: 60 // 1 hour
	},
	{
		title: 'Weekly Mechanical Meeting',
		description: 'The weekly meeting for the mechanical sub-team. Learn about the design aspects of robot and 3D model parts.',
		date: new Date('2025-09-02T17:00:00'),
		location: 'The ideas hub (second floor of the engineering building)',
		weekly: true,
		endDate: new Date(semesterEnd),
		duration: 60 // 1 hour
	}
]

export default EVENT_INFO

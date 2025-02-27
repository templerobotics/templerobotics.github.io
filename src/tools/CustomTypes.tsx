export type Color = `#${string}`

export interface TableInfo<T = object> {
	rows: T[]
}

export type EventObject = {
	title: string,
	date: Date,
	location: string,
	description: string,
	weekly?: boolean,
	endDate?: Date,
	tbd?: boolean,
	duration?: number
}

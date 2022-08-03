export type Color = `#${string}`

export interface TableInfo<T = object> {
	rows: T[]
}

export type EventObject = {
	title: string,
	date: Date,
	location: string,
	time: string,
	description: string
}

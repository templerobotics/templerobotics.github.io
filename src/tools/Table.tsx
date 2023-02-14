import React from 'react'
import { TableInfo } from './CustomTypes'
import styled from 'styled-components'
import { COLORS, FONT_FAMILY } from './Constants'
import { convertToTileCase } from './HelpfulFunctions'

const CustomTable = styled.table`
	height: 100%;
	margin: 0;
	text-align: center;
	vertical-align: middle;
	& > tbody > * > * {
		${FONT_FAMILY.BODY}
		font-size: calc(var(--vh) * .015);
	}

	& > tbody > tr > td {
		background-color: ${COLORS.SECONDARY_DARK}9f !important;
	}
`

const TableContainer = styled.div`
	height: 95%;
	margin: 5%;
	border-radius: 3%;
	border-style: solid;
	border-color: white;
	overflow-y: hidden;
`

function makeRowCells(object: object, i: number): React.ReactElement {
	const cells: React.ReactElement[] = []
	let count = 0

	for(const prop in object) {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		cells.push(<td key={count++}>{(object as any)[prop]}</td>)
	}
	return (<tr key={i}>{cells}</tr>)
}

// export default function createTable(table: Table): React.ReactElement {
export default class Table extends React.Component<{table: TableInfo}, never>  {
	render (): React.ReactElement {
		const rows: React.ReactElement[] = []
		const headers: string[] = []
		this.props.table.rows.forEach((row, i) => {
			rows.push(makeRowCells(row, i))
		})
		for(const prop in this.props.table.rows.at(0)) {
			headers.push(convertToTileCase(prop))
		}

		return (
			<TableContainer>
				<CustomTable className='table table-dark'>
					<thead>
						<tr>
							{headers.map((header, i) => <th key={i} scope='col'>{header}</th>)}
						</tr>
					</thead>
					<tbody>
						{rows.map(row => row)}
					</tbody>
				</CustomTable>
			</TableContainer>
		)
	}
}

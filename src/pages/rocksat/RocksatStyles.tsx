import styled from 'styled-components'
import { FONT_FAMILY } from '../../tools/Constants'

export default class RocksatStyles {
	static readonly RocksatContainer = styled.div<{tableRows: number}>`
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows:
			calc(var(--vh) * .2)				/* Title container */
			calc(var(--vh) * .3)   				/* Description container */
			calc(var(--vh) * .08 * ${props => props.tableRows})   				/* Table container */
			calc(var(--vh) * .55)   			/* Photo gallery container */
			max(calc(var(--vh) * .15), 100px);	/* Contacts */

		& > .img-container {
			display: flex;
			background: black;
		}

		& > .img-container > img {
			width: 100%;
			align-self: center;
		}
	`

	static readonly TitleContainer = styled.div`
		width: 100%;
		& > .title {
			${FONT_FAMILY.PAGE_TITLE}
			font-size: calc(var(--vh) * .08);
		}
	`

	static readonly Table = styled.div`
		width: 100%;
	`
}

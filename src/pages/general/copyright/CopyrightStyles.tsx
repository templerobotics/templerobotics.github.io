import styled from 'styled-components'

import { COLORS } from '../../../tools/Constants'

export default class CopyrightStyles {
	static readonly CopyrightContainer = styled.div`
		height: calc(var(--vh) * .02);
		align-self: end;
		background-color: ${COLORS.PRIMARY};
		text-align: center;
		width: 100%;
		display: flex;
    	justify-content: center;
		align-items: center;
	`
}

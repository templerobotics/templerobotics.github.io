import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import styled from 'styled-components'
import { ANIMATION_TIME, COLORS, CSS_STYLES, FONT_FAMILY } from '../../../tools/Constants'

export interface GalleryImage {
	image: string
	title: string
	description: string
}

export type PhotoGalleryProps = {
	id?: string,
	title?: string,
	className?: string,
	galleryInfo: GalleryImage[]
}

export type GallerySlideProps = {
	galleryInfo: GalleryImage[],
	id?: string
}

export default class PhotoGalleryStyles {
	static readonly GalleryContainer = styled.div`
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-columns: auto calc(var(--vh) * 0.7) auto;
		grid-template-rows: 20% 75% 5%;
		padding: 5%;
		justify-items: center;
		align-items: center;
	`

	static readonly Title = styled.div`
		grid-column-start: 1;
		grid-column-end: 4;
		${FONT_FAMILY.TITLE}
		font-size: calc(var(--vh) * .04);
	`

	static readonly Chevron = styled(BsChevronLeft || BsChevronRight)`
		font-size: calc(var(--vh) * .05);
		:hover {
			color: ${COLORS.HOVER_TEXT};
			cursor: pointer;
		}
	`

	static readonly SlideContainer = styled.div<{gridColumns: string}>`
		overflow: hidden;
		height: 100%;
		width: 100%;
		display: grid;
		grid-template-columns: ${props => props.gridColumns};
	`

	static readonly ImageContainer = styled.div`
		display: grid;
		grid-template-rows: calc(var(--vh) * 0.15) calc(var(--vh) * 0.035) auto;
		row-gap: 5%;
		width: 100%;

		& > * {
			margin: 0;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		& > h3 {
			${FONT_FAMILY.SECONDARY_TITLE}
			font-size: calc(var(--vh) * 0.03);
			text-align: center;
		}

		& > .gallery-image-container {
			overflow: hidden;
			border-radius: calc(var(--vh) * 0.01);
		}

		& > .gallery-image-container > img {
			width: 100%;
			min-height: 100%;
			object-fit: cover;
		}
	`

	static readonly Slide = styled.div`
		overflow-y: scroll;
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		grid-template-rows: 100%;
		height: 100%;
		column-gap: 2%;

		${CSS_STYLES.showScrollbar(undefined, COLORS.SECONDARY_SCROLLBAR)}
	`

	static readonly SlideCountContainer = styled.div`
		grid-column: 2;
		display: flex;
		column-gap: 10%;
		font-size: calc(var(--vh) * .02);

		& > * {
			-webkit-transition: color ${ANIMATION_TIME} linear;
			-ms-transition: color ${ANIMATION_TIME} linear;
			transition: color ${ANIMATION_TIME} linear;
		}
	`
}

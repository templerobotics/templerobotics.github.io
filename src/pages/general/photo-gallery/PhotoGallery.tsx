// Third party
import React from 'react'
import $ from 'jquery'
import { BsChevronLeft, BsChevronRight, BsDashLg } from 'react-icons/bs'
import {v4 as uuid} from 'uuid'

// Custom styles
import Styles, { PhotoGalleryProps, GallerySlideProps } from './PhotoGalleryStyles'

// General tools
import { ANIMATION_TIME, COLORS } from '../../../tools/Constants'

export default class PhotoGallery extends React.Component<PhotoGalleryProps, {currentSlide: number, galleryId: string}> {
	constructor(props: PhotoGalleryProps) {
		super(props)
		this.state = {
			currentSlide: 0,
			galleryId: this.props.id ?? uuid()
		}
	}

	/** Render the slides for the gallery */
	renderSlide = (): React.ReactElement[] => {
		const slideElements: React.ReactElement[] = []
		for (let i = 0; i < Math.ceil(this.props.galleryInfo.length / 3); i++) {
			const photoArray = this.props.galleryInfo.slice(i * 3, (i + 1) * 3)
			slideElements.push(<GallerySlide key={i} id={`slide${i}`} galleryInfo={photoArray}/>)
		}
		return slideElements
	}

	renderSlideCounters = (size: number): React.ReactElement[] => {
		const slideElements: React.ReactElement[] = []
		for (let i = 0; i < Math.ceil(this.props.galleryInfo.length / 3); i++) {
			slideElements.push(<BsDashLg size={size} key={i} id={`counter${i}`}/>)
		}
		return slideElements
	}

	slideLeft = (): void => { this.slide(-1) }
	slideRight = (): void => { this.slide(1) }

	/**
	 * Handle the sliding for the carousel
	 * @param direction -1 to go left one slide and 1 to go right one slide
	 */
	slide = (direction: number): void => {
		const animationSpeed = ANIMATION_TIME
		let nextSlide = this.state.currentSlide + direction
		const slidesLength = Math.ceil(this.props.galleryInfo.length / 3)
		nextSlide = ((nextSlide % slidesLength) + slidesLength) % slidesLength

		$(`#${this.state.galleryId} #slide${this.state.currentSlide}`)
			.fadeOut(animationSpeed).end()
		$(`#${this.state.galleryId} #slide${nextSlide}`)
			.fadeIn(animationSpeed).end()

		$(`#${this.state.galleryId} #counter${this.state.currentSlide}`)
			.css('color', COLORS.TEXT)
		$(`#${this.state.galleryId} #counter${nextSlide}`)
			.css('color', COLORS.PRIMARY)

		this.setState({ currentSlide: nextSlide })
	}

	componentDidMount(): void {
		// Hide slides after they render
		for (let i = 1; i < this.props.galleryInfo.length % 3; i++) {
			$(`#${this.state.galleryId} #slide${i}`).hide()
		}
		$(`#${this.state.galleryId} #counter0`).css('color', COLORS.PRIMARY)
	}

	render(): React.ReactElement {
		const gridColumns = '100% '.repeat(Math.ceil(this.props.galleryInfo.length / 3))
		const width = document.documentElement.style.getPropertyValue('--vh')

		return (
			<Styles.GalleryContainer className={this.props.className} id={this.state.galleryId}>
				<Styles.Title>{this.props.title ?? 'Photo Gallery'}</Styles.Title>
				<Styles.Chevron as={BsChevronLeft} size={parseFloat(width) * 0.05} onClick={this.slideLeft}/>
				<Styles.SlideContainer gridColumns={gridColumns}>
					{this.renderSlide()}
				</Styles.SlideContainer>
				<Styles.Chevron as={BsChevronRight} size={parseFloat(width) * 0.05} onClick={this.slideRight}/>
				<Styles.SlideCountContainer>
					{this.renderSlideCounters(parseFloat(width) * 0.02)}
				</Styles.SlideCountContainer>
			</Styles.GalleryContainer>
		)
	}
}

/**
 * Gallery slide react component to go into the photo gallery
 */
class GallerySlide extends React.Component<GallerySlideProps, never> {
	renderImages = (): React.ReactElement[] => {
		const slideImages: React.ReactElement[] = []
		this.props.galleryInfo.forEach((gallery, i) => {
			slideImages.push(
				<Styles.ImageContainer key={i}>
					<div className='gallery-image-container'>
						<img src={gallery.image}/>
					</div>
					<h3 className='gallery-title'>{gallery.title}</h3>
					<p>{gallery.description}</p>
				</Styles.ImageContainer>
			)
		})
		return slideImages
	}

	render (): React.ReactElement {
		return (
			<Styles.Slide id={this.props.id}>
				{this.renderImages()}
			</Styles.Slide>
		)
	}
}

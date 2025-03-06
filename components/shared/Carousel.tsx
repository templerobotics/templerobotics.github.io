'use client'
import Image, { StaticImageData } from 'next/image'
import styles from './Carousel.module.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule'

import React from 'react'
import { Button, Link } from '@mui/material'
import { ButtonProps } from '@utils/Types'

export type SlideProps = {
	title: string
	content: string
	image: StaticImageData
	buttons?: ButtonProps[]
}

const Carousel = ({ slides }: { slides: SlideProps[] }): React.ReactElement => {
	const [currentSlide, setCurrentSlide] = React.useState(slides[0]);

	const goToSlide = (prev?: boolean) => {
		const currentIndex = slides.indexOf(currentSlide);
		const direction = prev ? -1 : 1;
		const nextIndex = (currentIndex + direction + slides.length) % slides.length;
		setCurrentSlide(slides[nextIndex]);
	}

	const renderSlideCounters = () => {
		const slideCounters = slides.map((slide, i) => (
			<HorizontalRuleIcon key={i} fontSize='small' className={slide === currentSlide ? styles.activeSlideCounter : ''} />
		))
		return slideCounters;
	}

	return (
		<div className={`flex-horizontal ${styles.container}`}>
			<div className={`flex-horizontal-end ${styles.arrowContainer}`}>
				<Link onClick={() => goToSlide(true)}>
					<ArrowBackIosNewIcon fontSize='large' />
				</Link>
			</div>
			<div className={`flex-vertical ${styles.slideContainer}`}>
				<Slide slide={currentSlide}/>
				<div className='flex-horizontal'>
					{renderSlideCounters()}
				</div>
			</div>
			<div className={`flex-horizontal-start ${styles.arrowContainer}`}>
				<Link onClick={() => goToSlide()}>
					<ArrowForwardIosIcon fontSize='large' />
				</Link>
			</div>
		</div>
	)
}

const Slide = ({ slide }: { slide: SlideProps }): React.ReactElement => {
	return (
		<div className={styles.slide}>
			<div className={styles.imageContainer}>
				<Image fill src={slide.image} alt={slide.title}/>
			</div>
			<div className={`flex-vertical ${styles.textBox}`}>
				<div className='sub-section-header-text'>{slide.title}</div>
				<div className={styles.slideContent}>{slide.content}</div>
				{slide.buttons &&
					<div className={`flex-horizontal ${styles.buttons}`}>
						{slide.buttons.map((button, i) => <Button variant='outlined' href={button.path} target={button.internal ? '_self' : '_blank'} key={i}>{button.text}</Button>)}
					</div>
				}
			</div>
		</div>
	)
}

export default Carousel

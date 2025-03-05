'use client'
import Image, { StaticImageData } from 'next/image'
import styles from './PhotoGallery.module.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

import React from 'react'
import { Link } from '@mui/material'

export type PhotoComponentProps = {
	title: string
	content: string
	image: StaticImageData
}

const PhotoGallery = ({ photos }: { photos: PhotoComponentProps[] }): React.ReactElement => {
	const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);

	const goToSlide = (prev?: boolean) => {
		const photosOnSlide = 3;
		const direction = prev ? -1 : 1;
		const nextIndex = currentSlideIndex + direction * photosOnSlide;
		if (nextIndex >= photos.length) setCurrentSlideIndex(0);
		else if (nextIndex < 0) {
			const slideAmountToGoBackwards = photos.length % photosOnSlide || photosOnSlide;
			setCurrentSlideIndex(photos.length - slideAmountToGoBackwards);
		}
		else setCurrentSlideIndex(nextIndex);
	}

	const renderSlideCounters = () => {
		const slideCounters = [];
		for(let i = 0; i < Math.ceil(photos.length / 3); i++) {
			slideCounters.push(
				<HorizontalRuleIcon key={i} fontSize='small' className={i === Math.floor(currentSlideIndex / 3) ? styles.activeSlideCounter : ''} />
			)
		}
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
				<div className={`flex-horizontal ${styles.photosContainer}`}>
					<PhotoComponent photo={photos[currentSlideIndex]}/>
					{photos[currentSlideIndex + 1] && <PhotoComponent photo={photos[currentSlideIndex + 1]}/>}
					{photos[currentSlideIndex + 2] && <PhotoComponent photo={photos[currentSlideIndex + 2]}/>}
				</div>
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

const PhotoComponent = ({ photo }: { photo: PhotoComponentProps }): React.ReactElement => {
	return (
		<div className={`flex-vertical ${styles.slide}`}>
			<div className={styles.imageContainer}>
				<Image fill src={photo.image} alt={photo.title}/>
			</div>
			<div className={`flex-vertical ${styles.textBox}`}>
				<div className='sub-section-header-text'>{photo.title}</div>
				<div className={styles.slideContent}>{photo.content}</div>
			</div>
		</div>
	)
}

export default PhotoGallery

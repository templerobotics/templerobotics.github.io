import styles from './TextPictureSection.module.css'

import React from 'react'
import { Button } from '@mui/material'
import { ButtonProps } from '@utils/Types'
import Image, { StaticImageData } from 'next/image'

export type TextPictureSectionProps = {
	text: string
	image?: StaticImageData
	button: ButtonProps
	video?: {
		src: string
	}
}

const TextPictureSection = ({ props }: { props: TextPictureSectionProps }): React.ReactElement => {
	const renderVisual = (): React.ReactElement => {
		if (!props.video && props.image) {
			return <Image src={props.image} alt='Text section image' />
		}
		if (props.video) {
			return <video autoPlay muted loop playsInline width={'100%'}>
				<source src={props.video.src} type='video/mp4'/>
				Your browser does not support the video tag.
			</video>
		}
		return <></>
	}

	return (
		<div className={`${styles.container}`}>
			<div className={`flex-vertical ${styles.textSection}`}>
				<div className='flex-vertical' style={{ width: '60%', height: '100%' }}>
					<div className='sub-section-header-text'>What is it?</div>
					<div>
						{props.text}
					</div>
					<Button
						variant='outlined'
						href={props.button.path}
						target={props.button.internal ? '_self' : '_blank'}
						rel='noreferrer'>
						{props.button.text}
					</Button>
				</div>
			</div>
			<div className={`flex-horizontal ${styles.imageContainer}`}>
				{renderVisual()}
			</div>
		</div>
	)
}

export default TextPictureSection

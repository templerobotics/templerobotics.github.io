import { PhotoComponentProps } from '../shared/PhotoGallery'
import { TextPictureSectionProps } from '@components/shared/TextPictureSection'

import img1 from '@assets/images/rocksat-photo-gallery/rocksat-2020.jpg'
import img2 from '@assets/images/rocksat-photo-gallery/rocksat-2019.jpg'
import img3 from '@assets/images/rocksat-photo-gallery/rocksat-2017.jpg'
import img4 from '@assets/images/rocksat-photo-gallery/rocksat-2016.jpg'
import img5 from '@assets/images/rocksat-photo-gallery/rocksat-2015.jpg'
import img6 from '@assets/images/rocksat-photo-gallery/rocksat-2014-3.jpg'
import img7 from '@assets/images/rocksat-photo-gallery/rocksat-2014-2.jpg'
import img8 from '@assets/images/rocksat-photo-gallery/rocksat-2014-1.jpg'
import img9 from '@assets/images/rocksat-photo-gallery/rocksat-2011.bmp'

export const rocksatPhotoGallery: PhotoComponentProps[] = [
	{ image: img1, title: '2020', content: 'This group developed a payload to collect air samples via atmospheric port at varying altitudes to evaluate ozone and CFC levels' },
	{ image: img2, title: '2019', content: 'These individuals detected muon radiation in the upper atmosphere while gathering auxiliary sensor data' },
	{ image: img3, title: '2017', content: 'This group measured radiation levels and atmospheric ionization levels at different altitudes and compare them to find correlations between radiation and ionization' },
	{ image: img4, title: '2016', content: 'The goal of this group was to determine the concentration of sulfate based aerosols in the troposphere and stratosphere' },
	{ image: img5, title: '2015', content: 'This group collected biological air samples and different altitude levels of the atmosphere utilizing a uniquely designed passive filtration system' },
	{ image: img6, title: '2014', content: 'The payload design up close and personal!' },
	{ image: img7, title: '2014', content: 'The group holding their design of the payload' },
	{ image: img8, title: '2014', content: 'This project collected samples of the troposphere, stratosphere, and stratopause to have them analyzed for greenhouse gasses' },
	{ image: img9, title: '2011', content: 'The goal of this group was to design, build, implement and control an active vibration damping system using piezoceramic patch dampers' }
]

import rocksatImage from '@assets/images/carousel/originals/rocksat17.jpg'

export const rocksatTextPictureData: TextPictureSectionProps = {
	text: `
		The RockSat-C program is a national program, run by the Colorado Space Grant
		Consortium (CSGC), where students build rocket payloads to complete science
		missions. The payload is launched in a rocket at Wallops Island and the payload
		completes its mission as it falls back to earth.
	`,
	image: rocksatImage,
	button: {
		text: 'Learn More',
		path: 'https://www.templerobotics.org/static/media/rockSat-project-brief.bd63b55b5fb960dadae0.pdf'
	}
}
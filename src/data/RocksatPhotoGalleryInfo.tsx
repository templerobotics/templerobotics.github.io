import { GalleryImage } from '../pages/general/photo-gallery/PhotoGalleryStyles'
import { ROCKSAT_PHOTO_GALLERY } from '../tools/Constants'

// eslint-disable-next-line id-length
const ROCKSAT_PHOTO_GALLERY_INFO: GalleryImage[] = [
	{ image: ROCKSAT_PHOTO_GALLERY[0], title: '2020', description: `This group developed a payload to collect air samples via atmospheric
		port at varying altitudes to evaluate ozone and CFC levels` },
	{ image: ROCKSAT_PHOTO_GALLERY[1], title: '2019', description: `These individuals detected muon radiation in the upper atmosphere while
		gathering auxiliary sensor data` },
	{ image: ROCKSAT_PHOTO_GALLERY[2], title: '2017', description: `This group measured radiation levels and atmospheric ionization levels
		at different altitudes and compare them to find correlations between radiation and ionization` },
	{ image: ROCKSAT_PHOTO_GALLERY[3], title: '2016', description: `The goal of this group was to determine the concentration of sulfate
		based aerosols in the troposphere and stratosphere` },
	{ image: ROCKSAT_PHOTO_GALLERY[4], title: '2015', description: `This group collected biological air samples and different altitude
		levels of the atmosphere utilizing a uniquely designed passive filtration system` },
	{ image: ROCKSAT_PHOTO_GALLERY[5], title: '2014', description: `This project collected samples of the troposphere, stratosphere, and
		stratopause to have them analyzed for greenhouse gasses` },
	{ image: ROCKSAT_PHOTO_GALLERY[6], title: '2014', description: 'The group holding their design of the payload' },
	{ image: ROCKSAT_PHOTO_GALLERY[7], title: '2014', description: 'The payload design up close and personal!' },
	{ image: ROCKSAT_PHOTO_GALLERY[8], title: '2011', description: `The goal of this group was to design, build, implement and control an
		active vibration damping system using piezoceramic patch dampers` }
]

export default ROCKSAT_PHOTO_GALLERY_INFO

import React from 'react'
import styled from 'styled-components'
import { FONT_FAMILY, ROCKSAT_PHOTO_GALLERY } from '../../tools/Constants'
import { TableInfo } from '../../tools/CustomTypes'
import Button from '../general/button/Button'
import { GalleryImage } from '../general/photo-gallery/PhotoGalleryStyles'

type RocksatRow = {
	year: string,
	teamConcept: string,
	source: React.ReactElement
}

export const GALLERY_INFO: GalleryImage[] = [
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

export const TABLE_INFO: TableInfo<RocksatRow> = {
	rows: [
		{
			year: '2022', teamConcept: 'Examining Sonoluminescent Bubble with Respect to Gravity Change',
			source: <Button source={'https://spacegrant.colorado.edu/rs-c-2022-current-teams/temple-university'}
				text={'2022 Team'} size={'medium'}/>
		},
		{
			year: '2020', teamConcept: 'Evaluating Ozone and CFC Levels',
			source: <Button source={'https://spacegrant.colorado.edu/rs-c-2020-current-teams/rsc-tu-20'}
				text={'2020 Team'} size={'medium'}/>
		},
		{
			year: '2019', teamConcept: 'Detecting Muon Radiation',
			source: <Button source={'https://spacegrant.colorado.edu/rs-c-2019-current-teams/rsc-tu-2019'}
				text={'2019 Team'} size={'medium'}/>
		},
		{
			year: '2017', teamConcept: 'Measuring Radiation Levels and Atmospheric Ionization',
			source: <Button source={'https://spacegrant.colorado.edu/rs-c-2017-current-teams/tu17'}
				text={'2017 Team'} size={'medium'}/>
		},
		{
			year: '2016', teamConcept: 'Determining Concentration of Sulfate Based Aerosols in the Troposphere',
			source: <Button source={'https://spacegrant.colorado.edu/rs-c-2016-current-teams/tu16'}
				text={'2016 Team'} size={'medium'}/>
		},
		{
			year: '2015', teamConcept: 'Collecting Biological Air Samples',
			source: <Button source={'https://spacegrant.colorado.edu/rs-c-2015-current-teams/temple15'}
				text={'2015 Team'} size={'medium'}/>
		},
		{
			year: '2014', teamConcept: 'Collecting Samples of the Troposphere, Stratosphere, and Stratopause',
			source: <Button source={'https://spacegrant.colorado.edu/rs-c-2014-resources/current-teams/temple'}
				text={'2014 Team'} size={'medium'}/>
		},
		{
			year: '2013', teamConcept: 'Analyzing Greenhouse Gases of the Troposphere, Stratosphere, and Stratopause',
			source: <Button source={'https://spacegrant.colorado.edu/rs-c-2013-team-resources/current-teams/temple'}
				text={'2013 Team'} size={'medium'}/>
		},
		{
			year: '2012', teamConcept: 'Measuring the Earth\'s Magnetic Field and Taking Biological Samples',
			source: <Button source={'https://spacegrant.colorado.edu/rs-c-2012-team-resources/teams'}
				text={'2012 Team'} size={'medium'}/>
		},
		{
			year: '2011', teamConcept: 'Controlling an Active Vibration Damping System Using Piezoceramic Patch Dampers',
			source: <Button source={'https://spacegrant.colorado.edu/rs-c-2011-home/participants?layout=edit&id=297'}
				text={'2011 Team'} size={'medium'}/>
		}
	]
}

export default class RocksatStyles {
	static readonly RocksatContainer = styled.div`
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows:
			calc(var(--vh) * .2)				/* Title container */
			calc(var(--vh) * .3)   				/* Description container */
			calc(var(--vh) * .8)   				/* Table container */
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

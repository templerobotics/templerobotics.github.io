import React from 'react'
import styles from './ButtonSection.module.css'
import { Button } from '@mui/material'

const ButtonSection = (): React.ReactElement => {
    return (
        <div className={`flex-vertical ${styles.container}`}>
            <div className={`flex-vertical-space-around ${styles.textContainer}`}>
                <div className='sub-section-header-text'>Contact us on Teams!</div>
                <Button variant='outlined'>Join Teams</Button>
            </div>
        </div>
    )
}

export default ButtonSection

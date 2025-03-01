'use client'
import styles from './DropdownMenu.module.css'

import { useRouter } from 'next/navigation'
import React from 'react'

import { Link } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

type DropDownMenuProps = {
    title: { text: string, path: string }
    items: { text: string, path: string }[]
}

export default function DropdownMenu ({ title, items }: DropDownMenuProps): React.ReactElement {
    const router = useRouter()

    const handleClick = (path: string) => {
        router.push(path);
    }

	return (
        <div className={styles.dropdown}>
            <Link className={`flex-horizontal ${styles.dropdownLink}`}>
                {title.text} <KeyboardArrowDownIcon fontSize='small'/>
            </Link>

            <div className={styles.dropdownMenu}>
                {items.map((item, i) => <div key={i} className={styles.menuItem} onClick={() => handleClick(item.path)}>{item.text}</div>)}
            </div>
        </div>
	)
}

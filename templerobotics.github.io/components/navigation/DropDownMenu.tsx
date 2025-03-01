'use client'
import styles from './DropdownMenu.module.css'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

import { Link, Menu, MenuItem } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

type DropDownMenuProps = {
    title: { text: string, path: string }
    items: { text: string, path: string }[]
}

export default function DropdownMenu ({ title, items }: DropDownMenuProps): React.ReactElement {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    let currentlyHovering = false;
    const router = useRouter()

    const handleMouseOver = (event: React.MouseEvent<HTMLElement>) => {
        handleHover();
        if (anchorEl !== event.currentTarget) {
            setAnchorEl(event.currentTarget);
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleHover = () => {
        currentlyHovering = true;
    }

    const handleCloseHover = () => {
        currentlyHovering = false;
        setTimeout(() => {
            if (!currentlyHovering) {
                handleClose();
            }
        }, 50);
    }

    const handleClick = (path: string) => {
        handleClose();
        router.push(path);
    }

	return (
        <div>
            <Link
                className={`flex-horizontal ${styles.dropdownLink}`}
                onClick={() => handleClick(title.path)}
                onMouseOver={handleMouseOver}
                onMouseLeave={handleCloseHover}>
                {title.text}
                <KeyboardArrowDownIcon fontSize='small' />
            </Link>

            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                autoFocus={false}
                slotProps={{
                    paper: {
                        style: {
                            borderTopLeftRadius: 0,
                            borderTopRightRadius: 0
                        }
                    },
                    list: {
                        onMouseLeave: handleCloseHover,
                        onMouseEnter: handleHover,
                        style: {
                            pointerEvents: 'auto',
                            backgroundColor: 'var(--primary)'
                        }
                    }
                }}
                PopoverClasses={{
                    root: styles.popOverRoot
                }}>
                {items.map((item, i) => <MenuItem key={i} className={styles.menuItem} onClick={() => handleClick(item.path)}>{item.text}</MenuItem>)}
            </Menu>
        </div>
	)
}

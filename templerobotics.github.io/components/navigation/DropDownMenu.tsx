'use client'
import styles from './DropdownMenu.module.css'

import { Link, Menu, MenuItem } from '@mui/material'

import React, { useState } from 'react'

export default function DropdownMenu ({ title, items }: { title: string, items: string[] }): React.ReactElement {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    let currentlyHovering = false;

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
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

	return (
        <div>
            <Link
                className='flex-horizontal cursor-pointer'
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                onMouseOver={handleClick}
                onMouseLeave={handleCloseHover}>
                {title}
            </Link>

            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{
                    onMouseLeave: handleCloseHover,
                    onMouseEnter: handleHover,
                    style: { pointerEvents: 'auto' }
                }}
                hideBackdrop
                PopoverClasses={{
                    root: styles.popOverRoot
                }}>
                {items.map((item, i) => <MenuItem key={i} className={styles.menuItem} onClick={handleClose}>{item}</MenuItem>)}
            </Menu>
        </div>
	)
}

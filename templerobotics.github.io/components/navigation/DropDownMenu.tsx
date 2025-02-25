'use client'

import { Link, Menu, MenuItem } from '@mui/material'

import React, { useState } from 'react'
// import { PATHS } from '@utils/Constants'

export default function DropDownMenu (): React.ReactElement {
    const [anchorEl, setAnchorEl] = useState<Element | null>(null)
    const open = Boolean(anchorEl);

    const handleMouseOver = (event: React.MouseEvent) => {
        setAnchorEl(event.currentTarget)
    };

    const handleMouseOut = () => {
        setAnchorEl(null)
    };

	return (
        <>
            <div
                onMouseEnter={handleMouseOver}
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                className={'flex-horizontal'}>
                <Link>Robotics</Link>
            </div>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleMouseOut}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                MenuListProps={{ 'aria-labelledby': 'basic-button' }}>
                <MenuItem onClick={handleMouseOut}>Profile</MenuItem>
                <MenuItem onClick={handleMouseOut}>My account</MenuItem>
                <MenuItem onClick={handleMouseOut}>Logout</MenuItem>
            </Menu>
        </>
	)
}

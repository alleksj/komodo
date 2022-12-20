import './MenuIcon.scss'

import React, { useState } from 'react';
import MenuLayout from '../../layouts/MenuLayout/MenuLayout';

const MenuIcon = () => {
    const [openMenu, setOpenMenu] = useState(false)

    const showMenu = () => {
        if (openMenu) {
            return <MenuLayout />
        }
    }

    const toggleMenu = async (e) => {
        const menuLines = e.currentTarget.classList
        menuLines.toggle('change')
        await setOpenMenu(!openMenu)
    }

    return (
        <>
        <div className='menu-bars' onClick={toggleMenu}>
            <div className='bar1'></div>
            <div className='bar2'></div>
            <div className='bar3'></div>
        </div>
        {showMenu()}
        </>
    );
};

export default MenuIcon;
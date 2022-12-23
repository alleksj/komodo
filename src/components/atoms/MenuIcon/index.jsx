import './MenuIcon.scss'

import React, { useState } from 'react';
import MenuLayout from '../../layouts/MenuLayout';

const MenuIcon = ( {pageClassName} ) => {
    const [openMenu, setOpenMenu] = useState(false)


    const toggleMenu = async (e) => {
        const menuLines = e.currentTarget.classList
        menuLines.toggle('change')
        await setOpenMenu(!openMenu)
    }

    return (
        <>
        <div className='menu-bars' onClick={toggleMenu}>
            <div className={`bar1 ${pageClassName}`}></div>
            <div className={`bar2 ${pageClassName}`}></div>
            <div className={`bar3 ${pageClassName}`}></div>
        </div>
        <MenuLayout openMenu={openMenu} />
        </>
    );
};

export default MenuIcon;
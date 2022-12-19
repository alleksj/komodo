import './MenuIcon.scss'

import React from 'react';

const MenuIcon = () => {

    const toggleMenu = (e) => {
        const menuLines = e.currentTarget.classList
        menuLines.toggle('change')
    }

    return (
        <div className='menu-bars' onClick={toggleMenu}>
            <div className='bar1'></div>
            <div className='bar2'></div>
            <div className='bar3'></div>
        </div>
    );
};

export default MenuIcon;
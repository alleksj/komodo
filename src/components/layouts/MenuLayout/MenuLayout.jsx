import './MenuLayout.scss'

import React from 'react';

const MenuLayout = () => {
    return (
        <div className='overlay'>
            <div className='choices'>
                <span>POČETNA STRANA</span>
                <span>MENI</span>
                <span>O NAMA</span>
                <span>GALERIJA</span>
                <span>PRIVATNI DOGADJAJI</span>
            </div>
            <div className='separator'></div>
        </div>
    );
};

export default MenuLayout;
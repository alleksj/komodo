import './MenuLayout.scss'

import React from 'react';

const MenuLayout = ({openMenu}) => {
    const addOverlayClass = () => {
        return openMenu ? "open" : "close"
    }

    const addSpanClass = () => {
        return openMenu ? "slide-in" : "slide-out"
    }
    
    return (
        <div className={`overlay ${addOverlayClass()}`}>
            <div className='choices'>
                <span className={`el-1 ${addSpanClass()}`}>POČETNA STRANA</span>
                <span className={`el-2 ${addSpanClass()}`}>MENI</span>
                <span className={`el-3 ${addSpanClass()}`}>O NAMA</span>
                <span className={`el-4 ${addSpanClass()}`}>GALERIJA</span>
                <span className={`el-5 ${addSpanClass()}`}>PRIVATNI DOGADJAJI</span>
            </div>
            <div className='separator'></div>
        </div>
    );
};

export default MenuLayout;
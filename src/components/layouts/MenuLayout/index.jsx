import './MenuLayout.scss'

import React from 'react';
import { Link } from 'react-router-dom'


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
                <Link to='/' ><span component={Link} to='/' className={`el-1 ${addSpanClass()}`}>POČETNA STRANA</span></Link>
                <Link to='/menu' style={{ color: 'inherit', textDecoration: 'inherit'}}><span className={`el-2 ${addSpanClass()}`}>MENI</span></Link>
                <Link to='/about-us' style={{ color: 'inherit', textDecoration: 'inherit'}}><span className={`el-3 ${addSpanClass()}`}>O NAMA</span></Link>
                <Link to='/gallery' style={{ color: 'inherit', textDecoration: 'inherit'}}><span className={`el-4 ${addSpanClass()}`}>GALERIJA</span></Link>
                <Link to='/private-events' style={{ color: 'inherit', textDecoration: 'inherit'}}><span className={`el-5 ${addSpanClass()}`}>PRIVATNI DOGADJAJI</span></Link>
            </div>
            <div className='separator'></div>
        </div>
    );
};

export default MenuLayout;
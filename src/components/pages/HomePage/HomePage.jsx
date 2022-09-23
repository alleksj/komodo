import './HomePage.scss'

import BackgroundImage from '../../atoms/BackgroundImage/BackgroundImage';
import HomeInfo from '../../layouts/HomeInfo/HomeInfo';
import React from 'react'
import Svg from '../../atoms/Svg/Svg';

const HomePage = () => {
    return (
        <div className='homepage-wrapper'>
            <div className='top'>
                <Svg icon="menu-bars" className="menu-icon"/>
                <BackgroundImage type='home' />
                <div className='title'>
                    <h1>Dobrodošli u</h1>
                    <img src={require('../../../images/logo.png')} alt='logo'/>
                    <h3>Bar - Restaurant</h3>
                </div>
                <Svg icon="scroll-down" className="scroll-down-icon"/>
            </div>
            
            <div className='bottom'>
                <HomeInfo />
            </div>
        </div>
    );
};

export default HomePage
import './HomePage.scss'

import BackgroundImage from '../../atoms/BackgroundImage/BackgroundImage'
import HomeInfo from '../../layouts/HomeInfo/HomeInfo'
import React, { useRef } from 'react'
import MenuIcon from '../../atoms/MenuIcon/MenuIcon'

const HomePage = () => {
    const ref = useRef(null)

    const handleClick = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <div className='homepage-wrapper'>
            <div className='top'>
                <MenuIcon />
                <BackgroundImage type='home' />
                <div className='title'>
                    <h1>Dobrodošli u</h1>
                    <img src={require('../../../images/logo.png')} alt='logo'/>
                    <h3>Bar - Restaurant</h3>
                </div>
                <button href="" onClick={handleClick} class="scroll-down-link scroll-down-arrow" data-iconfont="ETmodules" data-icon />
            </div>
            
            <div ref={ref} className='bottom'>
                <HomeInfo />
            </div>
        </div>
    )
}

export default HomePage
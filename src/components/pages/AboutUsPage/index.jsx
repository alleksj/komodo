import './AboutUsPage.scss'

import BackgroundImage from '../../atoms/BackgroundImage'
import React from 'react'
import MenuIcon from '../../atoms/MenuIcon'

const AboutUsPage = () => {

    return (
        <div className='about-us-wrapper'>
            <div className='top'>
                <MenuIcon />
                <BackgroundImage type='about' />
                <div className='title'>
                    <h1>O nama</h1>
                </div>
            </div>
        </div>
    )
}

export default AboutUsPage
import './GalleryPage.scss'

import BackgroundImage from '../../atoms/BackgroundImage'
import React from 'react'
import MenuIcon from '../../atoms/MenuIcon'

const GalleryPage = () => {

    return (
        <div className='gallery-wrapper'>
            <div className='top'>
                <MenuIcon />
                <BackgroundImage type='gallery' />
                <div className='title'>
                    <h1>Galerija</h1>
                </div>
            </div>
        </div>
    )
}

export default GalleryPage
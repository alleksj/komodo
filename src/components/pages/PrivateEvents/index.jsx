import './PrivateEvents.scss'

import BackgroundImage from '../../atoms/BackgroundImage'
import React from 'react'
import MenuIcon from '../../atoms/MenuIcon'

const PrivateEvents = () => {

    return (
        <div className='private-events-wrapper'>
            <div className='top'>
                <MenuIcon />
                <BackgroundImage type='gallery' />
                <div className='title'>
                    <h1>Privatni dogadjaji</h1>
                </div>
            </div>
        </div>
    )
}

export default PrivateEvents
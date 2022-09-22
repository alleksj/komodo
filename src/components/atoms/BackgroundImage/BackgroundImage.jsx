import './BackgroundImage.scss'

import PropTypes from 'prop-types';
import React from 'react';

const BackgroundImage = ({type}) => {
    console.log(type)
    const backgroundChoice = (page) => {
    switch (page) {
        case 'home':
            return <img src={require('../../../images/backgrounds/main_banner.jpg')} alt='home'/>
        case 'menu':
            return <img src={require('../../../images/backgrounds/menu_banner.jpg')} alt='menu'/>
        case 'gallery':
            return <img src={require('../../../images/backgrounds/gallery_banner.jpg')} alt='gallery'/>
        case 'about':
            return <img src={require('../../../images/backgrounds/about_banner.jpg')} alt='about'/>
        case 'events':
            return <img src={require('../../../images/backgrounds/events_banner.jpg')} alt='events'/>
        default:
            return <img src={require('../../../images/backgrounds/main_banner.jpg')} alt='home'/>
    }
}
    return (
        <div>
            {backgroundChoice(type)}
            <div className='overlay'/>
        </div>
    )
}

BackgroundImage.propTypes = {
    type: PropTypes.string.isRequired,
};

export default BackgroundImage;
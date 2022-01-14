import React from 'react';

function Banner(props) {
    const renderSwitch = (param) => {
        switch (param) {
            // CHANGE THE SOURCES FOR THE PHOTOS
            case 'Meni':
                return <img src={require('../images/splav_komodo_bar_8.jpg')} alt='Menu'></img>;
            case 'O nama':
                return <img src={require('../images/splav_komodo_bar_12.jpg')} alt='About'></img>;
            case 'Galerija':
                return <img src={require('../images/splav_komodo_bar_11.jpg')} alt='Gallery section'></img>;
            case 'Privatni događaji':
                return <img src={require('../images/splav_komodo_bar_9.jpg')} alt='Private events'></img>;
            default:
                return <img src={require('../images/main_banner.jpg')} alt='Komodo'></img>;
        }
    }
    return (
        <div className="banner">
            {renderSwitch(props.activeItem)}
        </div>
    )
}


export default Banner;
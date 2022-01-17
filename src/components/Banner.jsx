import React from 'react';

function Banner(props) {
    const renderSwitch = (param) => {
        switch (param) {
            // CHANGE THE SOURCES FOR THE PHOTOS
            case 'Meni':
                return (
                    <div>
                        <img src={require('../images/splav_komodo_bar_8.jpg')} alt='Menu'></img>
                        <div className='centered'>
                            <h1>Meni</h1>
                        </div>
                    </div>
                )
            case 'O nama':
                return (
                    <div>
                        <img src={require('../images/splav_komodo_bar_12.jpg')} alt='About'></img>
                        <div className='centered'>
                            <h1>O nama</h1>
                        </div>
                    </div>
                )
            case 'Galerija':
                return (
                    <div>
                        <img src={require('../images/splav_komodo_bar_11.jpg')} alt='Gallery section'></img>
                        <div className='centered'>
                            <h1>Galerija</h1>
                        </div>
                    </div>
                )
            case 'Privatni događaji':
                return (
                    <div>
                        <img src={require('../images/splav_komodo_bar_9.jpg')} alt='Private events'></img>
                        <div className='centered'>
                            <h1>Privatni događaji</h1>
                        </div>
                    </div>
                )
            default:
                return <img className="homeBanner" src={require('../images/main_banner.jpg')} alt='Komodo'></img>;
        }
    }
    return (
        <div className="banner">
            {renderSwitch(props.activeItem)}
        </div>
    )
}


export default Banner;
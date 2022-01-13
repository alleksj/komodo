import React from 'react';

function Banner(props) {
    const renderSwitch = (param) => {
        switch (param) {
            // CHANGE THE SOURCES FOR THE PHOTOS
            case 'Menu':
                return <img src='https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg'></img>;
            case 'About':
                return <img src='https://pizzapalaceburwell.com/wp-content/uploads/2021/11/Food.jpg'></img>;
            case 'Gallery':
                return <img src='https://static01.nyt.com/images/2021/01/26/well/well-foods-microbiome/well-foods-microbiome-superJumbo.jpg'></img>;
            case 'Private events':
                return <img src='https://ychef.files.bbci.co.uk/976x549/p04tx3m6.jpg'></img>;
            default:
                return <img src={props.image}></img>;
        }
    }
    return (
        <div className="banner">
            {renderSwitch(props.activeItem)}
        </div>
    )
}


export default Banner;
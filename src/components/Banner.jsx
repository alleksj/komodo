import React from 'react';

function Banner(props) {
    return (
        <div className="banner">
            <img src={props.image}></img>
        </div>
    )
}

export default Banner;
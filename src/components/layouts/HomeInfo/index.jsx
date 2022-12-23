import "./HomeInfo.scss"

import Button from "../../atoms/Button";
import React from 'react';

const HomeInfo = () => {
    return (
        <div className="info-wrapper">
            <div className="left-wrapper">
                <div className="description">
                    <span className="info-title">Dobrodošli na najlepši splav na zemunskom keju.</span>
                    <span className="info-subtitle">Posetite nas i uživajte u prijatnoj atmosferi našeg lokala kao i u ukusnoj hrani koju pripremamo za Vas.</span>
                    <Button text="O nama" buttonClassName="home-info-button"/>
                </div>
            </div>
            <div className="separator" />
            <div className="right-wrapper">
                 <img src={require("../../../images/home_food.jpg")} alt="dinner" className="info-image"></img>
            </div>
        </div>
    );
};

HomeInfo.propTypes = {
};

export default HomeInfo;
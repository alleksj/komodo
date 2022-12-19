import "./HomeInfo.scss"

import Button from "../../atoms/Button/Button";
import React from 'react';

const HomeInfo = () => {
    return (
        <div className="info-wrapper">
            <div className="description">
                <h2 className="title">Dobrodošli na najlepši splav na zemunskom keju.</h2>
                <p className="subtitle">Posetite nas i uživajte u prijatnoj atmosferi našeg lokala kao i u ukusnoj hrani koju pripremamo za Vas.</p>
                <Button />
            </div>
            <div className="separator"></div>
            <img src={require("../../../images/home_food.jpg")} alt="dinner" className="info-image"></img>
        </div>
    );
};

HomeInfo.propTypes = {
};

export default HomeInfo;
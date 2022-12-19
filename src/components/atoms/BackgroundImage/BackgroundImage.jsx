import './BackgroundImage.scss'

import classNames from "classnames"
import PropTypes from 'prop-types';
import React from 'react';

const BackgroundImage = ({className, type}) => {

    const backgroundClassnames = classNames(`background`, {
        [className]: className,
        "home-bg": type === "home",
        "menu-bg": type === "menu",
        "gallery-bg": type === "gallery",
        "about-bg": type === "about",
        "events-bg": type === "events",
      })

    return (
        <div className={backgroundClassnames}>
        </div>
    )
}

BackgroundImage.propTypes = {
    classNames: PropTypes.string,
    type: PropTypes.string.isRequired,
};

export default BackgroundImage;
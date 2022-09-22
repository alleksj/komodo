import PropTypes from 'prop-types';
import React from 'react';

const Svg = ({icon, className }) => {
    let pathPrefix = ""

    const url = `/icons/svg/svg.store.svg?build_version=${pathPrefix}`

    return (
        <span>
            <svg className={className}>
                <use xlinkHref={`${url}#${icon}`}/>
            </svg>
        </span>
    );
};

Svg.propTypes = {
    icon: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default Svg;
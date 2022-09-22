import './MenuIcon.scss'

import PropTypes from 'prop-types';
import React from 'react';

const MenuIcon = ({iconClass}) => {
    return (
        <div>
            <img src={require('../../../images/icons/menu_icon.svg')} alt=''></img>
        </div>
    );
};

MenuIcon.propTypes = {
    iconClass: PropTypes.string,
};

export default MenuIcon;
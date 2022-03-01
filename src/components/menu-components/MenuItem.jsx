import React from 'react';
import '../../styles/MenuItem.css';

const MenuItem = (props) => {
    return (
        <div className="menu-item">
            <h1 className="menu-item-title">{props.title}</h1>
            <p className="menu-item-desc">{props.description}</p>
        </div>
    );
};

export default MenuItem;
import React from 'react';

const MenuItem = (props) => {
    return (
        <div className="menu-item">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    );
};

export default MenuItem;
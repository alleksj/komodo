import './Button.scss'

import React from 'react';

const Button = ({ text, buttonClassName }) => {
    return (
        <button className={buttonClassName}>{text}</button>
    );
};

Button.propTypes = {
    
};

export default Button;
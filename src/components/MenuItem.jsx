import React from 'react';

function MenuItem(props) {
    const handleOnClick = (e) => {
        props.getActiveItem(e.target.textContent);
    }
    return (
        <div className='navbar-link' onClick={handleOnClick}>
            <ul>
                <li><a href='#' className='navbar-link-underline'>{props.title}</a></li>
            </ul>
        </div>

    );
}

export default MenuItem;
import React from 'react';

function MenuItem(props) {
    return (
        <div className='navbar-link'>
            <ul>
                <li><a href='#'>{props.title}</a></li>
            </ul>
        </div>

    );
}

export default MenuItem;
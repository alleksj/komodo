import React from 'react';

function NavItem(props) {
    const handleOnClick = (e) => {
        props.passedPropFromApp(e.target.textContent);
    }
    return (
        <div className='navbar-link' onClick={handleOnClick}>
            <ul>
                <li><a href='#' className='navbar-link-underline'>{props.title}</a></li>
            </ul>
        </div>

    );
}

export default NavItem;
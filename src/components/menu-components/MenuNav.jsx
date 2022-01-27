import React from 'react';

function MenuNav(props) {
    const handleOnClick = (e) => {
        e.preventDefault();
        props.changeMenu(e.target.textContent);
    }
    return (
        <div className='navbar-link' onClick={handleOnClick}>
            <ul>
                <li><a href='#' className='navbar-link-underline'>{props.title}</a></li>
            </ul>
        </div>

    );
}

export default MenuNav;
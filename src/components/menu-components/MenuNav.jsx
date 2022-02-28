import React from 'react';
import '../../styles/MenuNav.css';

function MenuNav(props) {
    const handleOnClick = (e) => {
        e.preventDefault();
        props.changeMenu(e.target.textContent);
    }
    return (
        <div className='navbar-link-menu' onClick={handleOnClick}>
            <ul>
                <li><a href='#'>{props.title}</a></li>
            </ul>
        </div>
    );
}

export default MenuNav;
import React from 'react';
import '../styles/NavItem.css';

function NavItem(props) {
    const handleOnClick = (e) => {
        props.passedPropFromApp(e.target.textContent);
    }
    return (
        <div className='navbar-link' onClick={handleOnClick}>
            <ul>
                <li><a href='#'>{props.title}</a></li>
            </ul>
        </div>

    );
}

export default NavItem;
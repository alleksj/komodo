import React, { useState } from 'react';
import MenuItem from './MenuItem';
import Button from './Button';
// import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

function Header(props) {
    const getHome = (e) => {
        props.getActiveItem("Home");
    }
    return (
        <header>
            <div className='logo' onClick={getHome}>
                Komodo
            </div>
            <div className='navbar'>
                <MenuItem title='Menu' passedPropFromApp={props.getActiveItem} />
                <MenuItem title='About' passedPropFromApp={props.getActiveItem} />
                <MenuItem title='Gallery' passedPropFromApp={props.getActiveItem} />
                <MenuItem title='Private events' passedPropFromApp={props.getActiveItem} />
            </div>
            <Button text='Reserve' />
        </header>
    );
}

export default Header;
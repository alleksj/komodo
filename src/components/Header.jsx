import React, { useState } from 'react';
import MenuItem from './MenuItem';
import Button from './Button';
// import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

function Header(props) {
    const getActiveItem = (e) => {
        props.getActiveItem("Home");
    }
    return (
        <header>
            <div className='logo' onClick={getActiveItem}>
                Komodo
            </div>
            <div className='navbar'>
                <MenuItem title='Menu' getActiveItem={props.getActiveItem} />
                <MenuItem title='About' getActiveItem={props.getActiveItem} />
                <MenuItem title='Gallery' getActiveItem={props.getActiveItem} />
                <MenuItem title='Private events' getActiveItem={props.getActiveItem} />
            </div>
            <Button text='Reserve' />
        </header>
    );
}

export default Header;
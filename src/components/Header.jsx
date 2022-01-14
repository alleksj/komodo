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
                <MenuItem title='Meni' passedPropFromApp={props.getActiveItem} />
                <MenuItem title='O nama' passedPropFromApp={props.getActiveItem} />
                <MenuItem title='Galerija' passedPropFromApp={props.getActiveItem} />
                <MenuItem title='Privatni događaji' passedPropFromApp={props.getActiveItem} />
            </div>
            <Button text='Rezerviši' />
        </header>
    );
}

export default Header;
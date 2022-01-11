import React from 'react';
import MenuItem from './MenuItem';
import Button from './Button';
// import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

function Header() {
    return (
        <header>
            <div className='logo'>Komodo</div>
            <div className='navbar'>
                <MenuItem title='Menu' />
                <MenuItem title='About' />
                <MenuItem title='Gallery' />
                <MenuItem title='Private events' />
            </div>
            <Button text='Reserve' />
        </header>
    );
}

export default Header;
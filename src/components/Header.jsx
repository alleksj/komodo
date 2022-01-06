import { MenuRounded, NoEncryption, NoteOutlined } from '@material-ui/icons';
import React from 'react';
import MenuItem from './MenuItem';
// import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

function Header() {
    return (
        <header>
            <div className='logo'>Logo</div>
            <div className='navbar'>
                <MenuItem title='Menu' />
                <MenuItem title='About' />
                <MenuItem title='Gallery' />
                <MenuItem title='Private events' />
            </div>
            {/* <MenuRoundedIcon /> */}
            <button>
                Reserve
            </button>
        </header>
    );
}

export default Header;
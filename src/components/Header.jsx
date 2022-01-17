import React from 'react';
import NavItem from './NavItem';
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
                <NavItem title='Meni' passedPropFromApp={props.getActiveItem} />
                <NavItem title='O nama' passedPropFromApp={props.getActiveItem} />
                <NavItem title='Galerija' passedPropFromApp={props.getActiveItem} />
                <NavItem title='Privatni događaji' passedPropFromApp={props.getActiveItem} />
            </div>
            <Button text='Rezerviši' />
        </header>
    );
}

export default Header;
import React, { useState } from 'react';
import '../../styles/Menu.css';
import MenuNav from './MenuNav';
import MenuData from "../../data/menu";

function Menu() {
    // State
    const [activeMenuItem, setActiveMenuItem] = useState("Sve");
    const [delay, setDelay] = useState();

    const changeMenu = (item) => {
        setActiveMenuItem(item);
    }

    // Switch what is displayed
    const displayMenu = (menu) => {
        switch (menu) {
            case 'Doručak':
                return <h1>Hello Doručak</h1>
            case 'Ručak':
                return <h1>Hello Ručak</h1>
            case 'Šejkovi':
                return <h1>Hello Šejkovi</h1>
            default:
                return <h1>Hello Sve</h1>
        }
    };
    // Render

    return (
        <>
            <nav className='menu-navbar'>
                <MenuNav className="menu-navitem" changeMenu={changeMenu} title="Sve" />
                <MenuNav className="menu-navitem" changeMenu={changeMenu} title="Doručak" />
                <MenuNav className="menu-navitem" changeMenu={changeMenu} title="Ručak" />
                <MenuNav className="menu-navitem" changeMenu={changeMenu} title="Šejkovi" />
            </nav>
            <div
                className='menu-grid'
            >
                {displayMenu(activeMenuItem)}
            </div>
        </>
    )
}

export default Menu;
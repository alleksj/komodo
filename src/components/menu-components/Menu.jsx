import React, { useState } from 'react';
import '../../styles/Menu.css';
import MenuNav from './MenuNav';
import MenuItem from './MenuItem';
import MenuData from "../../data/menu";

function Menu() {
    // State
    const [activeMenuItem, setActiveMenuItem] = useState("Sve");

    const changeMenu = (item) => {
        setActiveMenuItem(item);
    }

    // Switch what is displayed
    const displayMenu = (menu) => {
        switch (menu) {
            case 'Doručak':
                return <>
                    {MenuData.map((item, index) => {
                        if (item.category === "breakfast") {
                            return (
                                <MenuItem title={item.title} key={index} description={item.desc} />
                            )
                        }
                    })}
                </>
            case 'Ručak':
                return <>
                    {MenuData.map((item, index) => {
                        if (item.category === "lunch") {
                            return (
                                <MenuItem title={item.title} key={index} description={item.desc} />
                            )
                        }
                    })}
                </>
            case 'Šejkovi':
                return <>
                    {MenuData.map((item, index) => {
                        if (item.category === "shakes") {
                            return (
                                <MenuItem title={item.title} key={index} description={item.desc} />
                            )
                        }
                    })}
                </>
            default:
                return <>
                    {MenuData.map((item, index) => {
                        return (
                            <MenuItem title={item.title} key={index} description={item.desc} />
                        )
                    })}
                </>
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
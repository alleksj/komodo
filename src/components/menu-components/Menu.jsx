import React, { useState } from 'react';
import 'animate.css'
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
                        if (item.category === "doručak") {
                            return (
                                <MenuItem title={item.title} key={index} description={item.desc} />
                            )
                        }
                    })}
                </>
            case 'Sendviči':
                return <>
                    {MenuData.map((item, index) => {
                        if (item.category === "sendviči") {
                            return (
                                <MenuItem title={item.title} key={index} description={item.desc} />
                            )
                        }
                    })}
                </>
            case 'Meso':
                return <>
                    {MenuData.map((item, index) => {
                        if (item.category === "meso") {
                            return (
                                <MenuItem title={item.title} key={index} description={item.desc} />
                            )
                        }
                    })}
                </>
            case 'Pasta i rižoto':
                return <>
                    {MenuData.map((item, index) => {
                        if (item.category === "pasta i rižoto") {
                            return (
                                <MenuItem title={item.title} key={index} description={item.desc} />
                            )
                        }
                    })}
                </>
            case 'Pizza':
                return <>
                    {MenuData.map((item, index) => {
                        if (item.category === "pizza") {
                            return (
                                <MenuItem title={item.title} key={index} description={item.desc} />
                            )
                        }
                    })}
                </>
            case 'Salate':
                return <>
                    {MenuData.map((item, index) => {
                        if (item.category === "salata") {
                            return (
                                <MenuItem title={item.title} key={index} description={item.desc} />
                            )
                        }
                    })}
                </>
            case 'Čorbe':
                return <>
                    {MenuData.map((item, index) => {
                        if (item.category === "čorba") {
                            return (
                                <MenuItem title={item.title} key={index} description={item.desc} />
                            )
                        }
                    })}
                </>
            case 'Desert':
                return <>
                    {MenuData.map((item, index) => {
                        if (item.category === "desert") {
                            return (
                                <MenuItem title={item.title} key={index} description={item.desc} />
                            )
                        }
                    })}
                </>
            case 'Prilozi i sosevi':
                return <>
                    {MenuData.map((item, index) => {
                        if (item.category === "prilozi") {
                            return (
                                <MenuItem title={item.title} key={index} description={item.desc} />
                            )
                        }
                    })}
                </>
            case 'Kafe i topli napici':
                return <>
                    {MenuData.map((item, index) => {
                        if (item.category === "kafa") {
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
                <MenuNav changeMenu={changeMenu} title="Doručak" />
                <MenuNav changeMenu={changeMenu} title="Sendviči" />
                <MenuNav changeMenu={changeMenu} title="Meso" />
                <MenuNav changeMenu={changeMenu} title="Pasta i rižoto" />
                <MenuNav changeMenu={changeMenu} title="Pizza" />
                <MenuNav changeMenu={changeMenu} title="Salate" />
                <MenuNav changeMenu={changeMenu} title="Čorbe" />
                <MenuNav changeMenu={changeMenu} title="Desert" />
                <MenuNav changeMenu={changeMenu} title="Prilozi i sosevi" />
                <MenuNav changeMenu={changeMenu} title="Kafe i topli napici" />
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
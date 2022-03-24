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
            case 'Specijal kafe':
                return <>
                    {MenuData.map((item, index) => {
                        if (item.category === "specijal kafa") {
                            return (
                                <MenuItem title={item.title} key={index} description={item.desc} />
                            )
                        }
                    })}
                </>
            case 'Voda':
                return <>
                    {MenuData.map((item, index) => {
                        if (item.category === "vode") {
                            return (
                                <MenuItem title={item.title} key={index} description={item.desc} />
                            )
                        }
                    })}
                </>
            case 'Energetski napici':
                return <>
                    {MenuData.map((item, index) => {
                        if (item.category === "energetski napici") {
                            return (
                                <MenuItem title={item.title} key={index} description={item.desc} />
                            )
                        }
                    })}
                </>
            case 'Sokovi':
                return <>
                    {MenuData.map((item, index) => {
                        if (item.category === "sokovi") {
                            return (
                                <MenuItem title={item.title} key={index} description={item.desc} />
                            )
                        }
                    })}
                </>
            case 'Piva i cideri':
                return <>
                    {MenuData.map((item, index) => {
                        if (item.category === "piva") {
                            return (
                                <MenuItem title={item.title} key={index} description={item.desc} />
                            )
                        }
                    })}
                </>
            case 'Viski i žestina':
                return <>
                    {MenuData.map((item, index) => {
                        if (item.category === "viski") {
                            return (
                                <MenuItem title={item.title} key={index} description={item.desc} />
                            )
                        }
                    })}
                </>
            case 'Rakije i likeri':
                return <>
                    {MenuData.map((item, index) => {
                        if (item.category === "rakije") {
                            return (
                                <MenuItem title={item.title} key={index} description={item.desc} />
                            )
                        }
                    })}
                </>
            case 'Vina i šampanjci':
                return <>
                    {MenuData.map((item, index) => {
                        if (item.category === "vina") {
                            return (
                                <MenuItem title={item.title} key={index} description={item.desc} />
                            )
                        }
                    })}
                </>
            case 'Kokteli':
                return <>
                    {MenuData.map((item, index) => {
                        if (item.category === "kokteli") {
                            return (
                                <MenuItem title={item.title} key={index} description={item.desc} />
                            )
                        }
                    })}
                </>
            case 'Nargila':
                return <>
                    {MenuData.map((item, index) => {
                        if (item.category === "nargila") {
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
                <MenuNav changeMenu={changeMenu} title="Specijal kafe" />
                <MenuNav changeMenu={changeMenu} title="Voda" />
                <MenuNav changeMenu={changeMenu} title="Energetski napici" />
                <MenuNav changeMenu={changeMenu} title="Sokovi" />
                <MenuNav changeMenu={changeMenu} title="Piva i cideri" />
                <MenuNav changeMenu={changeMenu} title="Viski i žestina" />
                <MenuNav changeMenu={changeMenu} title="Rakije i likeri" />
                <MenuNav changeMenu={changeMenu} title="Vina i šampanjci" />
                <MenuNav changeMenu={changeMenu} title="Kokteli" />
                <MenuNav changeMenu={changeMenu} title="Nargila" />
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
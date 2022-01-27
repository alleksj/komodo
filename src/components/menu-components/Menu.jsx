import React, { useState } from 'react';
import { motion } from "framer-motion";
import MenuNav from './MenuNav';
import MenuData from "../../data/menu";

function Menu() {
    // State
    const [activeMenuItem, setActiveMenuItem] = useState("Sve");

    const changeMenu = (item) => {
        setActiveMenuItem(item);
    }

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
        },
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
            <motion.div
                className='menu-grid'
                variants={container}
                initial="hidden"
                animate="visible"
            >
                {displayMenu(activeMenuItem)}
            </motion.div>
        </>
    )
}

export default Menu;
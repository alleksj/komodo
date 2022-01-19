import React from 'react';
import { motion } from "framer-motion";
import NavItem from './NavItem';

function Menu() {
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
        },
    }

    return (
        <div className='menu'>
            <nav>
                <NavItem title="Sve" />
                <NavItem title="Predjela" />
                <NavItem title="Glavna jela" />
                <NavItem title="Dezerti" />
                <NavItem title="Pića" />
            </nav>
            <motion.div
                className='menu-grid'
                variants={container}
                initial="hidden"
                animate="visible"
            >
                <h1>Hello world</h1>
                <h1>Hello world</h1>
                <h1>Hello world</h1>
            </motion.div>
        </div>
    )
}

export default Menu;
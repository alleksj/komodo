import React from 'react';
import { motion } from "framer-motion";


function Menu({ items, all, breakfast, lunch, shakes }) {
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
        },
    }

    return (
        <motion.div
            className='menu-grid'
            variants={container}
            initial="hidden"
            animate="visible"
        >
        </motion.div>

    )
}

export default Menu;
import React from 'react';

const MenuItem = (props) => {
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
        },
    };

    return (
        <motion.div
            className="menu-item"
            variants={container}
            initial="hidden"
            animate="visible"
        >

        </motion.div>
    );
};

export default MenuItem;
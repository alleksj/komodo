import React from 'react';

const MenuItem = ({ items, all, breakfast, lunch, shakes }) => {
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
            <AllItems all={all} items={items} />
            <Breakfast breakfast={breakfast} items={items} />
            <Lunch lunch={lunch} items={items} />
            <Shakes shakes={shakes} items={items} />
        </motion.div>
    );
};

export default MenuItem;
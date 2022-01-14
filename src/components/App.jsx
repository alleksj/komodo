import React, { useState } from 'react';
import Header from './Header';
import Banner from './Banner';
import MainInfo from './MainInfo';
import Footer from './Footer';

import food from '../images/home_food.jpg';

function App() {
    const [activeItem, setActiveItem] = useState("Home");

    const changeDisplay = (item) => {
        setActiveItem(item);
    }

    return (
        <div>
            <Header getActiveItem={changeDisplay} />
            <Banner activeItem={activeItem} />
            <MainInfo activeItem={activeItem} />
            <Footer />
        </div>
    );
}

export default App;
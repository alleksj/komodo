import React, { useState } from 'react';
import '../styles/App.css';
import Header from './Header';
import Banner from './Banner';
import MainInfo from './MainInfo';
import Footer from './Footer';

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
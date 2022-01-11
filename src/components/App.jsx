import React from 'react';
import Header from './Header';
import Banner from './Banner';
import MainInfo from './MainInfo';
import Footer from './Footer';

import image from '../images/main_banner.jpg';
import food from '../images/home_food.jpg';

function App() {

    return (
        <div>
            <Header />
            <Banner image={image} />
            <MainInfo image={food} />
            <Footer />
        </div>
    );
}

export default App;
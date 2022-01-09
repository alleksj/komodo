import React from 'react';
import Header from './Header';
import Banner from './Banner';
import image from '../images/main_banner.jpg';
import MainInfo from './MainInfo';
import Footer from './Footer';
function App() {

    return (
        <div>
            <Header />
            <Banner image={image} />
            <MainInfo />
            <Footer />
        </div>
    );
}

export default App;
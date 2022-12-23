import "./MenuPage.scss"
import React from 'react'
import MenuIcon from "../../atoms/MenuIcon"
import BackgroundImage from "../../atoms/BackgroundImage"
import Carousel from 'react-multi-carousel'
import "../../../images/breakfast.png"

const MenuPage = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 10
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      }
    return (
        <div className='menu-page-wrapper'>
            <div className='top'>
                <MenuIcon />
                <BackgroundImage type='menu' />
                <div className='title'>
                    <h1>Meni</h1>
                    <div className="menu-carousel">
                        <Carousel responsive={responsive} infinite={true} keyBoardControl={true} containerClass='react-multi-carousel-list' arrows={false}>
                            <div className="carousel-item">
                                <img className="menu-img" src={require("../../../images/breakfast.png")} alt="Hi"/>
                                <span>Doručak</span>
                            </div>
                            <div className="carousel-item">
                                <img className="menu-img" src={require("../../../images/sandwich.png")} alt="Hi"/>
                                <span>Sendviči</span>
                            </div>
                            <div className="carousel-item">
                                <img className="menu-img" src={require("../../../images/salad.png")} alt="Hi"/>
                                <span>Salate</span>
                            </div>
                            <div className="carousel-item">
                                <img className="menu-img" src={require("../../../images/soup.png")} alt="Hi"/>
                                <span>Supe</span>
                            </div>
                            <div className="carousel-item">
                                <img className="menu-img" src={require("../../../images/spaghetti.png")} alt="Hi"/>
                                <span>Pasta i rižoto</span>
                            </div>
                            <div className="carousel-item">
                                <img className="menu-img" src={require("../../../images/pizza.png")} alt="Hi"/>
                                <span>Pice</span>
                            </div>
                            <div className="carousel-item">
                                <img className="menu-img" src={require("../../../images/steak.png")} alt="Hi"/>
                                <span>Meso</span>
                            </div>
                            <div className="carousel-item">
                                <img className="menu-img" src={require("../../../images/dessert.png")} alt="Hi"/>
                                <span>Dezerti</span>
                            </div>
                            <div className="carousel-item">
                                <img className="menu-img" src={require("../../../images/french-fries.png")} alt="Hi"/>
                                <span>Prilozi</span>
                            </div>
                            <div className="carousel-item">
                                <img className="menu-img" src={require("../../../images/juice.png")} alt="Hi"/>
                                <span>Sokovi</span>
                            </div>
                            <div className="carousel-item">
                                <img className="menu-img" src={require("../../../images/coffee.png")} alt="Hi"/>
                                <span>Kafe</span>
                            </div>
                            <div className="carousel-item">
                                <img className="menu-img" src={require("../../../images/drinks.png")} alt="Hi"/>
                                <span>Pića</span>
                            </div>
                        </Carousel>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default MenuPage;
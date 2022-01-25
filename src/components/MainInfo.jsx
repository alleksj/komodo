import React from 'react';
import Button from './Button';
import Menu from './Menu';
import NavItem from './NavItem';

function MainInfo(props) {
    const renderSwitch = (param) => {
        switch (param) {
            case 'Meni':
                return (
                    <div>
                        <nav className='menu-navbar'>
                            <NavItem className="menu-navitem" title="Sve" />
                            <NavItem className="menu-navitem" title="Predjela" />
                            <NavItem className="menu-navitem" title="Glavna jela" />
                            <NavItem className="menu-navitem" title="Dezerti" />
                            <NavItem className="menu-navitem" title="Pića" />
                        </nav>
                        <Menu />
                    </div>
                )
            case 'O nama':
                return (
                    <div className='split'>
                        <div>
                            <h1>Dobrodošli na najlepši splav na zemunskom keju.</h1>
                            <p>Posetite nas i uživajte u prijatnoj atmosferi našeg lokala kao i u ukusnoj hrani koju pripremamo za Vas.</p>
                            <Button text='O nama' />
                        </div>
                        <div className='food-image'>
                            <img src={require('../images/home_food.jpg')} alt='Dish'></img>
                        </div>
                    </div>
                );
            case 'Galerija':
                return (
                    <div className='split'>
                        <div>
                            <h1>Dobrodošli na najlepši splav na zemunskom keju.</h1>
                            <p>Posetite nas i uživajte u prijatnoj atmosferi našeg lokala kao i u ukusnoj hrani koju pripremamo za Vas.</p>
                            <Button text='O nama' />
                        </div>
                        <div className='food-image'>
                            <img src={require('../images/home_food.jpg')} alt='Dish'></img>
                        </div>
                    </div>
                );
            case 'Privatni događaji':
                return (
                    <div className='split'>
                        <div>
                            <h1>Dobrodošli na najlepši splav na zemunskom keju.</h1>
                            <p>Posetite nas i uživajte u prijatnoj atmosferi našeg lokala kao i u ukusnoj hrani koju pripremamo za Vas.</p>
                            <Button text='O nama' />
                        </div>
                        <div className='food-image'>
                            <img src={require('../images/home_food.jpg')} alt='Dish'></img>
                        </div>
                    </div>
                );
            default:
                return (
                    <div className='split'>
                        <div>
                            <h1>Dobrodošli na najlepši splav na zemunskom keju.</h1>
                            <p>Posetite nas i uživajte u prijatnoj atmosferi našeg lokala kao i u ukusnoj hrani koju pripremamo za Vas.</p>
                            <Button text='O nama' />
                        </div>
                        <div className='food-image'>
                            <img src={require('../images/home_food.jpg')} alt='Dish'></img>
                        </div>
                    </div>
                );
        }
    }

    return (
        <div>
            {renderSwitch(props.activeItem)}
        </div>

    )
}

export default MainInfo;
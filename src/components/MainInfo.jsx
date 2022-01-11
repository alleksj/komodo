import React from 'react';
import Button from './Button';

function MainInfo(props) {
    return (
        <div className='split'>
            <div>
                <h1>Dobrodošli na najlepši splav na zemunskom keju.</h1>
                <p>Posetite nas i uživajte u prijatnoj atmosferi našeg lokala kao i u ukusnoj hrani koju pripremamo za Vas.</p>
                <Button text='O nama' />
            </div>
            <div className='food-image'>
                <img src={props.image} alt='Dish'></img>
            </div>
        </div>
    )
}

export default MainInfo;
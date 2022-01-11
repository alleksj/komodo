import React from 'react';

function MainInfo(props) {
    return (
        <div className='split'>
            <div>
                <h1>Dobrodošli na najlepši splav na zemunskom keju.</h1>
                <p>Posetite nas i uživajte u prijatnoj atmosferi našeg lokala kao i u ukusnoj hrani koju pripremamo za Vas.</p>
            </div>
            <div className='food-image'>
                <img src={props.image}></img>
            </div>
        </div>
    )
}

export default MainInfo;
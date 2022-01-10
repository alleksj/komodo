import React from 'react';

function Footer() {
    const date = new Date();
    const currentTime = date.getFullYear();
    return (
        <footer>
            <div className='logo'>Komodo</div>
            <p>© {currentTime} Komodo. All Rights Reserved.</p>
            <div className='location'>
                <label>LOCATION</label>
                <p>Kej Oslobodjenja BB 11118, Beograd 11070</p>
            </div>
        </footer>
    )
}

export default Footer;
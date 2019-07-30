import React from 'react';
import './style.css';
import ceoImage from '../../images/CEO_crusifix.jpg';

function Header() {

    return (
        <div >
        <img className='centered-image' src={ceoImage} alt='ceo_head'></img>
        </div>
    );
}

export default Header;
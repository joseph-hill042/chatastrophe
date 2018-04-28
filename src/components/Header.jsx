import React from 'react';
import icon from '../images/icon.png';

const Header = () => {
    return (
        <div id="Header">
            <img src={icon} alt="logo" />
            <h1>Chatastrophe</h1>
        </div>
    );
};

export default Header;
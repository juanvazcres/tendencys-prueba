//import PropTypes from 'prop-types'
import React from 'react'
import logo from './img/LogoTendencys.svg';
import './styles/Header.css';

const Header = () => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        </header>
    )
}

Header.propTypes = {}

export default Header
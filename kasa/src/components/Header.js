import React, { Component } from "react";
import logo from '../assets/logo.png'; 
import '../styles/Header.css';
import { Link } from 'react-router-dom';

class Header extends Component{

    render(){
        return (
            <header className="header">
                <Link to="/">
                    <img className="header_logo" src={ logo } alt="logo Kasa" />
                </Link>
                
                <nav className="header_nav">
                    <Link className="header_nav-link" to="/">Accueil</Link>
                    <Link className="header_nav-link" to="/about">A Propos</Link>
                </nav>
            </header>);
    }
}

export default Header;
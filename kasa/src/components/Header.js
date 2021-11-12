import React, { Component } from "react";
import logo from '../assets/logo.png'; 
import '../styles/Header.css';

class Header extends Component{

    constructor(props){
        super(props);
        this.state= {title: props.title || "Kasa"};        
    }

    render(){
        return (
            <div className="header">
                <a href="index.html">
                    <img className="header_logo" src={ logo } alt="logo Kasa" />
                </a>
                
                {/* <h1>{this.state.title}</h1> */}
                <div className="header_nav">
                    <a className="header_nav-link" href="#accueil">Accueil</a>
                    <a className="header_nav-link" href="#accueil">A Propos</a>
                </div>
            </div>);
    }
}

export default Header;
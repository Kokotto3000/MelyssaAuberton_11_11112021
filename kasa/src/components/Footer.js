import { Component } from "react";
import { Link } from "react-router-dom";
import '../styles/Footer.css';
import logoPM from '../assets/logoPM.png';

class Footer extends Component{

    render(){
        return(
            <footer className="footer">
                <Link to="/" className="footer_link">
                    <img src={ logoPM } alt="logo Kasa" />
                </Link>
                <p className="footer_p">&copy; 2020 Kasa. All rights reserved</p>
            </footer>
        );
    }
}

export default Footer;
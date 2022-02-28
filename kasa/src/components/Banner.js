import { Component } from "react";
import '../styles/Banner.css';
import { PropTypes } from 'prop-types';

class Banner extends Component{

    constructor(props){
        super(props);
        this.state= {
            title: props.title || null,
            image: props.image
        };        
    }

    render(){
        return (
            this.state.title ? (
                <div className="banner--home">
                    <img className="banner_image" src={this.state.image} alt={this.state.title} />
                    <div className="banner_overlay">
                        <h1 className="banner_title">{this.state.title}</h1>
                    </div>
                </div>
            ) : (
                <div className="banner">
                    <img className="banner_image" src={this.state.image} alt={this.state.title} />
                    <div className="banner_overlay"></div>
                </div>
            )
        );
    }
}

Banner.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string.isRequired
};

export default Banner;
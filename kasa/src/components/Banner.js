import { Component } from "react";
import '../styles/Banner.css';

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
            <div className="banner">
                <img className="banner_image" src={this.state.image} alt={this.state.image} />
                <h1 className="banner_title">{ this.state.title }</h1>
            </div>
        );
    }
}

export default Banner;
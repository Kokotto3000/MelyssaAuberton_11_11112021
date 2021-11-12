import { Component } from "react";
import '../styles/Banner.css';

class Banner extends Component{

    constructor(props){
        super(props);
        this.state= {title: props.title || null};        
    }

    render(){
        return (
            <div className="banner">
                <h1 className="banner_title">{ this.state.title }</h1>
            </div>
        );
    }
}

export default Banner;
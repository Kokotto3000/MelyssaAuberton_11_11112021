import { Component } from "react";
import "../styles/Title.css";


class Title extends Component{

    render(){
        return(
            <div className="accomodation-header_title">
                <h1 className="accomodation-header_title-main">{this.props.title}</h1>
                <h2 className="accomodation-header_title-subtitle">{this.props.location}</h2>
            </div>
            
        );
    }
}

export default Title;
import { Component } from "react";
import "../styles/Title.css";


class Title extends Component{

    render(){
        const {title, location}= this.props;

        return(
            <div className="accomodation-header_title">
                <h1 className="accomodation-header_title-main">{title}</h1>
                <h2 className="accomodation-header_title-subtitle">{location}</h2>
            </div>
            
        );
    }
}

export default Title;
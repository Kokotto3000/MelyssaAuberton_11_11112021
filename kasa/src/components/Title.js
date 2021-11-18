import { Component } from "react";
import "../styles/Title.css";


class Title extends Component{

    render(){
        return(
            <div className="accomodation-header_title">
                <h3>{this.props.title}</h3>
                <h4>{this.props.location}</h4>
            </div>
            
        );
    }
}

export default Title;
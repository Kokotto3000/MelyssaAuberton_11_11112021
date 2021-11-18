import { Component } from "react";
import "../styles/Rate.css";

class Rate extends Component{

    render(){
        return(
            <h3 className="accomodation-header_rate">{this.props.rating}</h3>
        );
    }
}

export default Rate;
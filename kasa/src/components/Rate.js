import { Component } from "react";
import "../styles/Rate.css";

class Rate extends Component{

    render(){
        const maxRate= [...Array(5)];

        return(
            <div className="accomodation-header_rate">
                {maxRate.map((element, index)=> (
                    <svg key={index} width="16" height="16" viewBox="0 0 16 16" fill={index < this.props.rating ? "#FF6060" : "#E3E3E3"} xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.8225 6.5L8 0.5L6.1775 6.5H0.5L5.135 9.8075L3.3725 15.5L8 11.9825L12.635 15.5L10.8725 9.8075L15.5 6.5H9.8225Z" />
                    </svg>
                ))}
            </div>
        );
    }
}

export default Rate;
import { Component } from "react";
import "../styles/Host.css";

class Host extends Component{

    render(){
        return(
            <div className="accomodation-header_host">
                <h3>{this.props.name}</h3>
                <img src={this.props.picture} alt={this.props.name} />
            </div>
            
        );
    }
}

export default Host;
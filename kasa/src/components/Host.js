import { Component } from "react";
import "../styles/Host.css";

class Host extends Component{

    render(){
        const {name, picture}= this.props;
        const splitName= name.split(' ');
        const firstName= splitName[0];
        const lastName= splitName[1];

        return(
            <div className="accomodation-header_host">
                <h3 className="accomodation-header_host-name">{firstName}<br />{lastName}</h3>
                <img className="accomodation-header_host-image" src={picture} alt={name} />
            </div>
            
        );
    }
}

export default Host;
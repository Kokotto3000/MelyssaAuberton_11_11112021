import { Component } from "react";
import "../styles/Host.css";

class Host extends Component{

    render(){
        const name= this.props.name.split(' ');
        const firstName= name[0];
        const lastName= name[1];

        return(
            <div className="accomodation-header_host">
                <h3 className="accomodation-header_host-name">{firstName}<br />{lastName}</h3>
                <img className="accomodation-header_host-image" src={this.props.picture} alt={name} />
            </div>
            
        );
    }
}

export default Host;
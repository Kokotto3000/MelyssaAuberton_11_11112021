import { Component } from "react";


class Accomodation extends Component{

    render(){
        console.log(this.props);
        return(
            <h1>Accomodation {this.props.match.params.id} </h1>
        );
    }
}

export default Accomodation;
import { Component } from "react";
import Carrousel from "../components/Carrousel";
import Title from "../components/Title";
import Host from "../components/Host";
import Tags from "../components/Tags";
import Rate from "../components/Rate";
import "../styles/Accomodation.css";
import Dropdown from "../components/Dropdown";


class Accomodation extends Component{

    render(){
        console.log(this.props);
        return(
            <div>
                <h1>Accomodation {this.props.match.params.id} </h1>
                <Carrousel />
                <section className="accomodation-header">
                    <Title />
                    <Host />
                    <Tags />
                    <Rate />
                </section>
                <div className="accomodation-menu">
                    <Dropdown />
                    <Dropdown />
                </div>
            </div>
        );
    }
}

export default Accomodation;
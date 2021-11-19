import { Component } from "react";
import Carrousel from "../components/Carrousel";
import Title from "../components/Title";
import Host from "../components/Host";
import Tags from "../components/Tags";
import Rate from "../components/Rate";
import "../styles/Accomodation.css";
import Dropdown from "../components/Dropdown";
import logements from '../datas/logements';

class Accomodation extends Component{

    constructor(props){
        super(props);
        this.state= {
            id: this.props.match.params.id
        }
    }

    filterById(id){
        const filteredLogement = logements.filter(logement => logement.id === id);
        return filteredLogement.length === 0 ? null : filteredLogement[0];
    }    

    render(){
        console.log(this.state.id);
        console.log(this.filterById(this.state.id));

        const logement= this.filterById(this.state.id);

        return(
            <div>
                {/* <h1>Accomodation {this.state.id} </h1> */}
                <Carrousel pictures={logement.pictures} alt={logement.title} />
                <section className="accomodation-header"> 
                    <Title title={logement.title} location={logement.location} />
                    <Host name={logement.host.name} picture={logement.host.picture} />
                    <Tags tags={logement.tags} />
                    <Rate rating={logement.rating} />
                </section>
                <div className="accomodation-menu">
                    <div className="accomodation-menu_dropdown">
                        <Dropdown title="Description" description={logement.description} />
                    </div>
                    <div className="accomodation-menu_dropdown">
                        <Dropdown title="Equipements" description={logement.equipments} />
                    </div>                    
                </div>
            </div>
        );
    }
}

export default Accomodation;
import { Component } from "react";
import Carrousel from "../components/Carrousel";
import Title from "../components/Title";
import Host from "../components/Host";
import Tags from "../components/Tags";
import Rate from "../components/Rate";
import "../styles/Accomodation.css";
import Dropdown from "../components/Dropdown";
import logements from '../datas/logements';
import PageNotFound from "./PageNotFound";

class Accomodation extends Component{

    constructor(props){
        super(props);
        this.state= {
            id: this.props.match.params.id
        }
    }

    filterById(id){
        return logements.find(logement => logement.id === id);
    }    

    render(){
        const logement= this.filterById(this.state.id);

        if(!logement) return <PageNotFound />

        return(
            <main>
                <Carrousel pictures={logement.pictures} alt={logement.title} />
                <section className="accomodation-header"> 
                    <Title title={logement.title} location={logement.location} />
                    <Host name={logement.host.name} picture={logement.host.picture} />
                    <Tags tags={logement.tags} />
                    <Rate rating={parseInt(logement.rating)} />
                </section>
                <div className="accomodation-menu">
                    <div className="accomodation-menu_dropdown">
                        <Dropdown title="Description" description={logement.description} type="accomodation" />
                    </div>
                    <div className="accomodation-menu_dropdown">
                        <Dropdown title="Equipements" description={logement.equipments} type="accomodation" />
                    </div>                    
                </div>
            </main>
        );
    }
}

export default Accomodation;
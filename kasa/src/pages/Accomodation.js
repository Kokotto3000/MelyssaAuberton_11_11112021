import { Component } from "react";
import Carrousel from "../components/Carrousel";
import Title from "../components/Title";
import Host from "../components/Host";
import Tags from "../components/Tags";
import Rate from "../components/Rate";
import "../styles/Accomodation.css";
import Dropdown from "../components/Dropdown";
//import logements from '../datas/logements';
import PageNotFound from "./PageNotFound";

class Accomodation extends Component{

    constructor(props){
        super(props);
        this.state= {
            id: this.props.match.params.id,
            logements: null,
            logement: null,
            loading: true,
            error: false
        }
    }

    componentDidMount(){
        const id= this.props.match.params.id;
        console.log(id)
        fetch('../datas/logements.json')
        .then(response=> response.json())
        .then(logements=> {
            this.setState({logements: logements});
            this.setState({logement: this.filterById(id)});
        })
        .catch(err=> {
            console.log("error : " + err);
            this.setState({ error: true });
        })
        .finally(()=> this.setState({loading: false}))
    }

    filterById(id){
        const {logements}= this.state;
        return logements.find(logement => logement.id === id);
    }

    render(){
        const { logement, loading, error }= this.state;

        if(loading) return <div>Loading datas...</div>

        if(error) return <PageNotFound />

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
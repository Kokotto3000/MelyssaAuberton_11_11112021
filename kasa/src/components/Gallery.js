import { Component } from "react";
import '../styles/Gallery.css';
import Thumb from "./Thumb";
import { Link } from 'react-router-dom';

class Gallery extends Component{

    constructor(props){
        super(props);
        this.state= {
            logements: null
        };
    }

    componentDidMount(){
        fetch('../datas/logements.json')
        .then(response=> response.json())
        .then(logements=> this.setState({logements: logements}));
    }

    render(){

        const {logements} = this.state;

        if(logements){
            return(
                <div className="gallery">
                    {logements.map(({id, title, cover}) => (
                        <Link to={`/accomodation/${id}`} key={id}>
                            <Thumb
                                id={id}
                                title={title}
                                cover={cover}
                            />
                        </Link>     
                    ))}
                </div>
            );
        }
        return(
            <div>Loading datas...</div>
        );
    }
}

export default Gallery;
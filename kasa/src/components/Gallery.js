import { Component } from "react";
import '../styles/Gallery.css';
import Thumb from "./Thumb";
import logements from '../datas/logements';
import { Link } from 'react-router-dom';

console.log(logements);

class Gallery extends Component{

    render(){
        return(
            <ul className="gallery">
                {logements.map(({id, title, cover}) => 
                    (
                        <Link to={`/accomodation/${id}`} key={id}>
                            <Thumb
                                id={id}
                                title={title}
                                cover={cover}
                            />
                        </Link>
                    )
                )}
            </ul>
        );
    }
}

export default Gallery;
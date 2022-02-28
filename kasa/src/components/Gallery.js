import { Component } from "react";
import '../styles/Gallery.css';
import Thumb from "./Thumb";
import logements from '../datas/logements';
import { Link } from 'react-router-dom';

class Gallery extends Component{

    render(){
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
}

export default Gallery;
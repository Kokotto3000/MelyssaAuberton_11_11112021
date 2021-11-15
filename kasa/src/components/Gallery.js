import { Component } from "react";
import '../styles/Gallery.css';
import Thumb from "./Thumb";
import logements from '../datas/logements';

console.log(logements);

class Gallery extends Component{

    render(){
        return(
            <ul className="gallery">
                {logements.map(({id, title, cover}) => 
                    (
                        <div key={id}>
                            <Thumb
                                id={id}
                                title={title}
                                cover={cover}
                            />
                        </div>
                    )
                )}
            </ul>
        );
    }
}

export default Gallery;
import { Component } from "react";
import '../styles/Thumb.css';

class Thumb extends Component{

    render(){
        const {id, title, cover}= this.props;
        
        return (   
                
            <li className="thumb" key={id}>
                <img className="thumb_image" src={cover} alt={title} />
                <div className="thumb_overlay">
                    <h2 className="thumb_title">{title}</h2>
                </div>
            </li>
                
        );
    }
}

export default Thumb;
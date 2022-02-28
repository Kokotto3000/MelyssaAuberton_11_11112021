import { Component } from "react";
import '../styles/Thumb.css';
import { PropTypes } from "prop-types";

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

Thumb.propTypes= {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired
}

export default Thumb;
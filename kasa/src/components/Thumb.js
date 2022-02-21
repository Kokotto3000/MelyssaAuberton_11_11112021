import { Component } from "react";
import '../styles/Thumb.css';

class Thumb extends Component{

    constructor(props){
        super(props);
        this.state= {
            id: props.id,
            title: props.title,
            cover: props.cover
        };        
    }

    render(){
        
        return (   
                
            <li className="thumb" key={this.state.id}>
                <img className="thumb_image" src={this.state.cover} alt={this.state.title} />
                <div className="thumb_overlay">
                    <h2 className="thumb_title">{this.state.title}</h2>
                </div>
            </li>
                
        );
    }
}

export default Thumb;
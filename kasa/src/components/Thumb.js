import { Component } from "react";
import '../styles/Thumb.css';
import { Link } from "react-router-dom";

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
            
                <Link to={`/accomodation/${this.state.id}`} key={this.state.id}>
                    <li className="thumb">
                        <h2 className="thumb_title">{this.state.title}</h2>
                    </li>
                </Link>
        );
    }
}

export default Thumb;
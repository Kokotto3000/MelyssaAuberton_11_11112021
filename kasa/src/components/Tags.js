import { Component } from "react";
import "../styles/Tags.css";

class Tags extends Component{

    render(){
        return(            
            <ul className="accomodation-header_tags">
                {this.props.tags.map((tag, index) =>
                    (
                        <li className="accomodation-header_tags-item" key={index}>
                            {tag}
                        </li>
                    )
                )}
            </ul>
        );
    }
}

export default Tags;
import { Component } from "react";
import "../styles/Tags.css";

class Tags extends Component{

    render(){
        const {tags}= this.props;
        
        return(            
            <ul className="accomodation-header_tags">
                {tags.map((tag, index) =>
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
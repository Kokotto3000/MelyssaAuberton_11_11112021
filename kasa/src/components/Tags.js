import { Component } from "react";
import "../styles/Tags.css";

class Tags extends Component{

    render(){
        return(
            <div className="accomodation-header_tags">
                <ul className="accomodation-header_tags-list">
                {this.props.tags.map((tag, index) =>
                    (
                        <li key={index}>
                            {tag}
                        </li>
                    )
                )}
            </ul>

            </div>
        );
    }
}

export default Tags;
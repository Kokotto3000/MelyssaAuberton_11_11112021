import { Component } from "react";
import "../styles/Tags.css";
import { PropTypes } from "prop-types";

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

Tags.propTypes= {
    tags: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Tags;
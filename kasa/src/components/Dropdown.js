import { Component } from "react";
import "../styles/Dropdown.css";
import { PropTypes } from "prop-types";

class Dropdown extends Component{

    constructor(props){
        super(props);
        this.state={
            isCollapse: true
        }
    }

    handleCollapse(){
        this.setState(()=> (
            {
                isCollapse: this.state.isCollapse ? false : true
            }
        ))
    }

    render(){
        
        const { title, description, type }= this.props;

        if(!this.state.isCollapse){
            return (
                <div className={`dropdown--${type}`} onClick={this.handleCollapse.bind(this)}>            
                    <h3 className={`dropdown_title--${type}`}>{title}</h3>                    
                    
                    {typeof description === "string" ? (
                        <p className={`dropdown_description--${type}`}>{description}</p>
                    ) : (
                        <ul className={`dropdown_description--${type}`}>
                            {description.map((element, index)=> (
                                <li className="dropdown_list" key={index}>
                                    {element}
                                </li>
                            ))}
                        </ul>
                    )}      
                </div>
            )
        }
        
        return(
            <div className={`dropdown--${type} collapse`} onClick={this.handleCollapse.bind(this)}>
                <h3 className={`dropdown_title--${type} collapse`} onClick={this.handleCollapse.bind(this)}>{title}</h3>
            </div>
        );
    }
}

Dropdown.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]).isRequired,
    type: PropTypes.string.isRequired
};

export default Dropdown;
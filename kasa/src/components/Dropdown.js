import { Component } from "react";
import "../styles/Dropdown.css";

class Dropdown extends Component{

    constructor(props){
        super(props);
        this.state={
            isCollapse: true
        }
    }

    handleCollapse(){
        this.setState(({isCollapse})=> (
            {
                isCollapse: this.state.isCollapse ? false : true
            }
        ))
    }

    render(){
        
        const { title, description, type }= this.props;
        
        return(
            <div className="dropdown">
                {this.state.isCollapse ? (
                    <h3 className={`dropdown_title--${type} collapse`} onClick={this.handleCollapse.bind(this)}>{title}</h3>
                ) : (
                    <h3 className={`dropdown_title--${type}`} onClick={this.handleCollapse.bind(this)}>{title}</h3>
                    
                )}
                
                
                {!this.state.isCollapse && typeof description === "string" && (
                    <p className={`dropdown_description--${type}`}>{description}</p>
                )}

                {!this.state.isCollapse && typeof description !== "string" && (
                    <ul className={`dropdown_description--${type}`}>
                        {description.map((element, index)=> (
                            <li className="dropdown_list" key={index}>
                                {element}
                            </li>
                        ))}
                    </ul>
                )}        
            </div>
        );
    }
}

export default Dropdown;
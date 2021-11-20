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
        
        const { title, description }= this.props;
        
        return(
            <div className="dropdown">
                {this.state.isCollapse ? (
                    <h3 className="dropdown_title collapse" onClick={this.handleCollapse.bind(this)}>{title}</h3>
                ) : (
                    <h3 className="dropdown_title" onClick={this.handleCollapse.bind(this)}>{title}</h3>
                    
                )}
                
                
                {!this.state.isCollapse && typeof description === "string" && (
                    <p className="dropdown_description">{description}</p>
                )}

                {!this.state.isCollapse && typeof description !== "string" && (
                    <ul className="dropdown_description">
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
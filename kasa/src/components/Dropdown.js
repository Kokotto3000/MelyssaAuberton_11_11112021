import { Component } from "react";
import "../styles/Dropdown.css";

class Dropdown extends Component{

    render(){
        
        const { title, description }= this.props;
        console.log(description);
        
        return(
            <div className="dropdown">
                <h4>{title}</h4>
                {typeof description === "string" ? (
                    <p>{description}</p>
                ) : (
                    <ul>
                        {description.map((element, index)=> (
                            <li key={index}>
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
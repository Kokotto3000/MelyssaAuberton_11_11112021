import { Component } from "react";
import "../styles/Carrousel.css";
import { PropTypes } from "prop-types";

class Carrousel extends Component{

    constructor(props){
        super(props);
        this.state={
            alt: this.props.alt,
            pictures: this.props.pictures,
            current: 0
        }
    }

    handlePrevious(){
        this.setState(({current})=> (
            {
                current: this.state.current <= 0 ? this.state.pictures.length - 1 : current - 1
            }
        ))
    }

    handleNext(){
        this.setState(({current})=> (
            {
                current: this.state.current >= this.state.pictures.length - 1 ? 0 : current + 1
            }
        ))
    }

    render(){
        return(
            <div className="carrousel">
                <img className="carrousel_image" src={this.state.pictures[this.state.current]} alt={this.state.alt} />
                { this.state.pictures.length > 1 && 
                    <button className="carrousel_button-previous" onClick={this.handlePrevious.bind(this)}>
                        <svg viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
                        </svg>
                    </button>
                }
                { this.state.pictures.length > 1 &&
                    <button className="carrousel_button-next" onClick={this.handleNext.bind(this)}>
                        <svg viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
                        </svg>
                    </button> 
                }
                <p className="carrousel_index">{`${this.state.current + 1}/${this.state.pictures.length}`}</p>
            </div>
        );
    }
}

Carrousel.propTypes = {
    alt: PropTypes.string.isRequired,
    pictures: PropTypes.arrayOf(PropTypes.string),
};

export default Carrousel;
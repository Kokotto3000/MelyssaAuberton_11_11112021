import '../styles/About.css';
import { Component } from 'react';
import Banner from '../components/Banner';
import Dropdown from '../components/Dropdown';
import background from "../assets/banner-background-about.jpg";

class About extends Component{

    constructor(props){
        super(props);
        this.state= {
            about: null
        };
    }

    componentDidMount(){
        fetch('../datas/about.json')
        .then(response=> response.json())
        .then(about=> this.setState({about: about}));
    }

    render(){
        const {about}= this.state;

        if(about){
            return (
                <main className='about'>
                    <Banner image={background} />
                    <div className="about-menu">
                        {about.map((element, index)=> (
                                <Dropdown key={index} title={element.title} description={element.description} type="about" />
                            )
                        )}
                    </div>
                </main>
            );
        }
        return (
            <div>Loading datas...</div>
        )
        
    }  
}

export default About;
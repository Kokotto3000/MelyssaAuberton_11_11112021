import '../styles/About.css';
import { Component } from 'react';
import Banner from '../components/Banner';
import Dropdown from '../components/Dropdown';
import about from '../datas/about';
import background from "../assets/banner-background-about.jpg";

class Propos extends Component{

  render(){
        return (
            <main>
                <Banner image={background} />
                <div className="about-menu">
                    {about.map((element, index)=> (
                            <Dropdown key={index} title={element.title} description={element.description} />
                        )
                    )}
                </div>
            </main>
        );
  }
  
}

export default Propos;
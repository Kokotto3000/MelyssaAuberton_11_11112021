import '../styles/About.css';
import { Component } from 'react';
import Banner from '../components/Banner';
import Dropdown from '../components/Dropdown';

class Propos extends Component{

  render(){
        return (
            <div>
                {/* <Header /> */}
                <Banner />
                <h1>A propos</h1>
                <div className="about-menu">
                  <Dropdown />
                  <Dropdown />
                  <Dropdown />
                  <Dropdown />
                </div>
            </div>
        );
  }
  
}

export default Propos;
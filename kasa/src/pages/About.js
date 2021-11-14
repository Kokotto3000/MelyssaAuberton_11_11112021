import '../styles/About.css';
import { Component } from 'react';
import Banner from '../components/Banner';

class Propos extends Component{

  render(){
        return (
            <div>
                {/* <Header /> */}
                <Banner />
                <h1>A propos</h1>
            </div>
        );
  }
  
}

export default Propos;
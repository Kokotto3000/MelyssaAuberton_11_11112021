import '../styles/Home.css';
import { Component } from 'react';
import Banner from '../components/Banner';
import Gallery from '../components/Gallery';


class Accueil extends Component{

  render(){
        return (
            <div>
                {/* <Header /> */}
                <Banner title="Chez vous, partout et ailleurs"/>
                <Gallery />
            </div>
        );
  }
  
}

export default Accueil;
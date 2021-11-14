import '../styles/Home.css';
import { Component } from 'react';
import Banner from '../components/Banner';


class Accueil extends Component{

  render(){
        return (
            <div>
                {/* <Header /> */}
                <Banner title="Chez vous, partout et ailleurs"/>
                <h1>Accueil</h1>
            </div>
        );
  }
  
}

export default Accueil;
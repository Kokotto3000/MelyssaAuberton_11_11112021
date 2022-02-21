import '../styles/Home.css';
import { Component } from 'react';
import Banner from '../components/Banner';
import Gallery from '../components/Gallery';
import background from "../assets/banner-background-home.jpg";


class Home extends Component{

  render(){
        return (
            <main>
                {/* <Header /> */}
                <Banner title="Chez vous, partout et ailleurs" image={background} />
                <Gallery />
            </main>
        );
  }
  
}

export default Home;
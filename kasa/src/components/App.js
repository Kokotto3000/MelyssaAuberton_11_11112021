import '../styles/App.css';
import { Component } from 'react';
import Banner from './Banner';
import Header from './Header';

class App extends Component{

  render(){
    return (
      <div>
        <Header />
        <Banner title="Chez vous, partout et ailleurs"/>
      </div>
    );
  }
  
}

export default App;

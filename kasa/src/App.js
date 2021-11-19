import './styles/App.css';
import { Component } from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import PageNotFound from './pages/PageNotFound';
import Footer from './components/Footer';
import Accomodation from './pages/Accomodation';

class App extends Component{

    render(){
        return (
            <Router>
                <div>
                    <Header />
                  
                    <Switch>

                        <Route exact path="/" component={Home} />
                        <Route exact path="/MelyssaAuberton_11_11112021" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route path="/accomodation/:id" component={Accomodation}/>
                        <Route path="*" component={PageNotFound} />            
                        
                        {/* si l'id n'existe pas il nous faudra aussi une route not found... */}

                    </Switch>

                    <Footer />
                  </div>
            </Router>
        );
    }
  
}

export default App;

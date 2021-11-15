import './styles/App.css';
import { Component } from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
                  
                    <Routes>

                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/about" element={<About />} />
                        <Route path="/accomodation/:id" element={<Accomodation />} />
                        <Route path="*" element={<PageNotFound />} />            
                        
                        {/* si l'id n'existe pas il nous faudra aussi une route not found... */}

                    </Routes>

                    <Footer />
                  </div>
            </Router>
        );
    }
  
}

export default App;

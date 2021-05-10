import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import About from './components/about/About'
import Logistics from './components/logistics/Logistics'
import Plants from './components/plants/Plants'
import Contact from './components/contact/Contact'
import Nothing from './components/404/Nothing'
import Footer from './components/footer/Footer'

import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar/>
            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/about' component={About}/>
              <Route path='/logistics' component={Logistics}/>
              <Route path='/plants' component={Plants}/>
              <Route path='/contact' component={Contact}/>
              <Route component={Nothing}/>
            </Switch>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;

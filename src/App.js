import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Listing from './Employee/Listing/Listing';
import Create from './Employee/Create/Create'

class App extends Component {
  
  render() {
    return (
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/"><a className="navbar-brand" href="#">Employee Dashboard</a></Link>
          </nav>
         <Switch>
            <Route path="/" exact component={Listing}/>
            <Route path='/create' component={Create}/>
          </Switch>
          {/* <Listing></Listing> */}
        </div>  
    );
  }
}

export default App;

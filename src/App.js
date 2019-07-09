import React, {Component} from 'react';
import './App.css';
import Listing from './Employee/Listing/Listing';

class App extends Component {
  
  state = [
    {"name": "Mohamed", "age": "27"},
]
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
           <a className="navbar-brand" href="#">Employee Dashboard</a>
        </nav>
        <button className = "btn-primary btn">Add Employee</button>
        <Listing name={this.state[0].name} age={this.state[0].age}></Listing>
      </div>  
    );
  }
}

export default App;

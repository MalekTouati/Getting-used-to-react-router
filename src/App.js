import React , {Component} from 'react';
import {BrowserRouter , Link , Route} from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import Leaderboards from "./Leaderboards/Leaderboards";
import AllTitles from "./All titles/AllTitles"

class App extends Component {
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <div className="nav">
            <div className="links">
              <Link to = "/home" className = "link"> Home </Link>
              <Link to = "/leaderboards" className = "link"> Leaderboards </Link>
              <Link to = "/alltitles" className = "link"> All titles </Link>
            </div>
          </div>
          <Route path = "/home" exact component = {Home}/>
          <Route path = "/leaderboards" exact component = {Leaderboards}/>
          <Route path = "/alltitles" exact component = {AllTitles}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

import React , {Component} from 'react';
import "./style2.css";
import {Link} from "react-router-dom";

class Leaderboards extends Component {
  render(){
    return (
      <div>
        <img className = 'topScorers' src="https://miro.medium.com/max/1400/1*IEjATLjCjoKScJBWxEPdVQ.png"/>
        <button><Link className = "linkButton" to = "/home" > Back to home </Link></button>
      </div>
    );
  }
}

export default Leaderboards;
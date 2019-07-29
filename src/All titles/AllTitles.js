import React , {Component} from 'react';
import "./style3.css";
import {Link} from "react-router-dom";

class AllTitles extends Component {
  render(){
    return (
      <div>
      <img src="https://statics.sportskeeda.com/wp-content/uploads/2014/04/untitled2-2152704-21527041.jpg" className="titleList"/>
      <button><Link className = "linkButton" to = "/home" > Back to home </Link></button>
      </div>
    );
  }
}

export default AllTitles;
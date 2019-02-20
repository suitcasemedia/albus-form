import React, { Component } from 'react';
import Loading from 'react-loading';
import InfluencerDeliverablesForm from './InfluencerDeliverablesForm';
import { Link } from 'react-router-dom';
import { createPost } from '../actions/posts';

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar  d-block clearfix text-light header container">
          <ul className="nav float-left">
            <li className="nav-logo">
              <Link to="/"> Albus</Link> 
            </li>
            <li>
              <Link to="/">Campaigns</Link>
            </li>
            <li>
              <Link to="/">Hall of fame</Link>
            </li>
          </ul>
          <ul className="nav float-right">
            <li>
              <Link to="/">Notifications</Link>
            </li>
            <li>
              <Link to="/">John Smith</Link>
            </li>
          </ul>
        </nav>
        <div className="secondary-navbar pt-2">
        <nav className="navbar d-block text-light header container">
          <ul className="nav float-left">
            <li>
              <Link to="/">Campaigns</Link>
            </li>
            <li>
              <Link to="/">Hall of fame</Link>
            </li>
          </ul>
          <ul className="nav float-right">
            <li>
              <button className="btn-save">+ New Campaign </button>
            </li>
          </ul>
        </nav>

        </div>
      </div>   
    );
  }
}



export default Header

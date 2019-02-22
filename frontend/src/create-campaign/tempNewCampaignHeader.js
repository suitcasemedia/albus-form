import React, { Component } from 'react';

import { Link } from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar  d-block clearfix text-light header container">
          <ul className="nav float-left left">
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
          <ul className="nav float-right right">
            <li>
              <Link to="/">Notifications</Link>
            </li>
            <li>
              <Link to="/">John Smith</Link>
            </li>
          </ul>
        </nav>
        <div className="secondary-navbar pt-2">
            <div className="container">
                <div className="row">
                    <div className="col-md-4  pt-3">
                    <h4>Create new campaign</h4>
                    </div>
               
                    <div className="col-md-8  pt-3">
                        <button className="btn-save float-right">Exit</button>
                    </div>
                </div>     
            </div>
          
        
       

        </div>
      </div>   
    );
  }
}



export default Header

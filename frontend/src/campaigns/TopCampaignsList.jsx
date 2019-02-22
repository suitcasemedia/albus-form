import React, { Component } from 'react';
import Header from '../components/header';
import TopCampaignCard from './TopCampaignCard';
import Leaderboard from './LeaderBoard';

import {
  fetchPosts,
  fetchCategories,
  setActiveCategory,
} from '../actions/posts';
import { connect } from 'react-redux';


class TopCampaignsList extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="bg-body-light-grey">
          <div className="container">
            <div className="tertiary-navbar row mb-4">
              <div className="col-md-4">
                <button className="btn-save float-right">Last month  &#11206; </button>
                <h3>Top Campaigns</h3>
              </div>
              <div className="col-md-4">
              </div>
              <div className="col-md-4">
                <button className="signup-btn signup-btn--outline float-right">Download report  &#11206; </button>
              </div>                      
            </div>      
            <div className="row">
              <div className="col-md-4">
                <TopCampaignCard  className=""/>
              </div>
              <div className="col-md-4">
                <TopCampaignCard  className=""/>
              </div>
              <div className="col-md-4">
                <TopCampaignCard  className=""/>
              </div>
            </div>        
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
               
                <h3>Leaderboard</h3> 
                </div>
              </div>
              <div className="row">
               <div className="col-md-12">
                <div className="leader-board">
                <Leaderboard/>
                </div>
              </div>
            </div>
          
          </div>
         
          
        </div> 
        <footer/>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {};
}
function mapStateToProps(state, ownProps) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopCampaignsList);

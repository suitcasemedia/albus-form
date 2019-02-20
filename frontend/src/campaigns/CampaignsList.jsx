import React, { Component } from 'react';
import Header from './../components/header';
import Loading from 'react-loading';
import { withStyles } from '@material-ui/core/styles';
import CampaignCard from './CampaignCard';
import CampaignFilters from './CampaignFilters';

import {
  fetchPosts,
  fetchCategories,
  setActiveCategory,
} from './../actions/posts';
import { connect } from 'react-redux';


class CampaignsList extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="bg-body-light-grey">
        <div className="container  ">
          <div className="tertiary-navbar row">

            <div className="col-md-2">
              <span className="text-right pr-2">0 selected All</span>
            </div>
            <div className="col-md-2">
            search icon
            </div>
            <div className="col-md-2">
            </div>

             <div className="col-md-6">
            
            </div>

          </div>
          <div className="row">
            <div className="col-xl-2 col-lg-3">
            <CampaignFilters />
          
            </div>
            <div className="col-xl-10 col-lg-9">
            <div className="row">
            <div className="col-md-4">
              <CampaignCard  className=""/>
            </div>
            <div className="col-md-4">
              <CampaignCard  className=""/>
            </div>
            <div className="col-md-4">
              <CampaignCard  className=""/>
            </div>
            <div className="col-md-4">
              <CampaignCard  className=""/>
            </div>
            <div className="col-md-4">
              <CampaignCard  className=""/>
            </div>
            <div className="col-md-4">
              <CampaignCard  className=""/>
            </div>
            <div className="col-md-4">
              <CampaignCard  className=""/>
            </div>
            <div className="col-md-4">
              <CampaignCard  className=""/>
            </div>
            <div className="col-md-4">
              <CampaignCard  className=""/>
            </div>
            <div className="col-md-4">
              <CampaignCard  className=""/>
            </div>
            <div className="col-md-4">
              <CampaignCard  className=""/>
            </div>
            <div className="col-md-4">
              <CampaignCard  className=""/>
            </div>
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
)(CampaignsList);

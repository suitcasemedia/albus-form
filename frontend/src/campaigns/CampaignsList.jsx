import React, { Component } from 'react';
import Header from './../components/header';
import Loading from 'react-loading';
import { withStyles } from '@material-ui/core/styles';
import CampaignCard from './CampaignCard';
import CampaignFilters from './CampaignFilters';

import {
  fetchMyCampaigns,

} from './actions';
import { connect } from 'react-redux';


class CampaignsList extends Component {


  componentDidMount() {
    const { fetchMyCampaigns } = this.props;
    console.log('did mount', fetchMyCampaigns)
   if (fetchMyCampaigns) {
     fetchMyCampaigns();
   }
   
}
  render() {
    return (
      <div>
        <Header />
        <div className="bg-body-light-grey">
        <div className="container  ">
          <div className="tertiary-navbar row">

            <div className="col-xl-2 col-lg-3">
              <span className="text-right float-right pr-2">0 selected All</span>
            </div>
            <div className="col-xl-10 col-lg-9">
            search icon
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
function mapDispatchToProps(dispatch){
  console.log('map dispatch to props')
  return{
   
    fetchMyCampaigns : () => dispatch(fetchMyCampaigns()),
   
  }
}
function mapStateToProps({campaigns}, ownProps){
  console.log('map state to props')
  if( ownProps.match.params.category ){
     
  }

 
return{
      campaigns
    
      }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignsList);

import React, { Component } from 'react';
import Header from './tempNewCampaignHeader';
import { connect } from 'react-redux';


class Form4 extends Component {
  render() {
    return (
      <div>
     
        <div className="bg-body-light-grey">
          <div className="container">
            <div className="tertiary-navbar create-campaign-nav row mb-4">
              <div className="col-md-1"/>
              <div className="col-md-6 col-lg-8">

                <div className="create-campaign-nav__item create-campaign-nav__item--complete">
                    <span className="create-campaign-nav__tick">
                        <span className="create-campaign-nav__l">
                            L
                        </span>   
                    </span>
                    <h6 className="new-campaign-item__name">Define your campaign</h6>
                    <p>Name and describe your campaign</p>
                    <p>
                    <a href="#" onClick={()=>this.props.navTo(1)}>Edit</a>
                    </p>
                </div>


              


              </div>
              <div className="col-md-5 col-lg-3 create-campaign-nav__info p-4">
                
            
             
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
)(Form4);

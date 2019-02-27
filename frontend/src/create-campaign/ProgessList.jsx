import React, { Component } from 'react';
import Header from './tempNewCampaignHeader';
import { connect } from 'react-redux';


class ProgressList extends Component {
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

                <div className="create-campaign-nav__item">
                    <span className="create-campaign-nav__number create-campaign-nav__number--in-progress">2</span>
                    <h6 className="new-campaign-item__name">Select influencers</h6>
                    <p>Name and describe your campaign</p>
                    <span className="signup-btn btn">continue</span>
                    <p className="mt-3">
                        <a href="#" onClick={()=>this.props.navTo(2)}>Edit</a>
                    </p>
                </div>

                <div className="create-campaign-nav__item">
                    <span className="create-campaign-nav__number">3</span>
                    <h6 className="new-campaign-item__name">Define deliverable content</h6>
                    <p>Name and describe your campaign</p>
                    <p>
                        <a href="#" onClick={()=>this.props.navTo(3)}>Edit</a>
                    </p>
                </div>

                <div className="create-campaign-nav__item">
                    <span className="create-campaign-nav__number">4</span>
                    <h6 className="new-campaign-item__name">Add post links and tags</h6>
                    <p>Name and describe your campaign</p>
                    <p>
                        <a href="#" onClick={()=>this.props.navTo(4)}>Edit</a>
                    </p>
                </div>

                <div className="create-campaign-nav__item create-campaign-nav__item ">
                    <span className="create-campaign-nav__number ">5</span>
                    <h6 className="new-campaign-item__name">Vew results</h6>
                    <p>Name and describe your campaign</p>
                 <p>
                        <a href="#" onClick={()=>this.props.navTo(5)}>Edit</a>
                    </p>
                </div>
              


              </div>
              <div className="col-md-5 col-lg-3 create-campaign-nav__info p-4">
                <div className="create-campaign-nav__thumbnail-upload mb-4">
                    <p>
                        Add campaign thumbnail
                    </p>
                    <button className="signup-btn signup-btn--outline">
                        Upload
                    </button>
              
                </div>
                 <h6>Naked Cherry Palette Launch</h6>
                <p>Brand: <strong>Urban Decay</strong></p>
                <p>Objective: <strong>Engagement</strong></p>
                <hr/>
                <p>
                  Influencer campaign to promote the UK launch of Naked 5.
                </p>
                <span className="tag">
                    Makeup
                </span>
             
              </div> 
                                 
            </div>      
                  
          </div>
        
         
          
        </div> 
       
      


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
)(ProgressList);

import React, { Component } from 'react';
import Header from './tempNewCampaignHeader';
import { connect } from 'react-redux';
import ProgressList from './ProgessList';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import Form4 from './Form4';
import Results from './Results';

class CreateCampaignNavPage extends Component {

    state= {
        currentPage: 0,
    }

    navTo = currentPage =>{
        this.setState({currentPage})
    }
  render() {
    const {currentPage} = this.state;
    return (
      <div>
        <Header />
        { currentPage == 0 && <ProgressList navTo={this.navTo} />}
        { currentPage == 5 && <Results navTo={this.navTo} />}
        <div className="row">

            <div className="col-md-3"/>
                <div className="col-md-6">
                   
                    { currentPage == 1 && <Form1 navTo={this.navTo} />}
                    { currentPage == 2 && <Form2 navTo={this.navTo} />}
                    { currentPage == 3 && <Form3 navTo={this.navTo} />}
                    { currentPage == 4 && <Form4 navTo={this.navTo} />}
                   
                </div>
            <div className="col-md-3"/>
            
          
       
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
)(CreateCampaignNavPage);

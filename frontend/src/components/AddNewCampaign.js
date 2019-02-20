import React, { Component } from 'react';
import Header from './header';
import Loading from 'react-loading';
import sortByHelper from '../utils/sort-by-helper.js';
import CreatePost from './InfluencerDeliverablesForm';
import {
  fetchPosts,
  fetchCategories,
  setActiveCategory,
} from '../actions/posts';
import { connect } from 'react-redux';
import createPost from './InfluencerDeliverablesForm';

class PostList extends Component {
  render() {
    return (
      <div>
        <Header redirectHome={false} actionType={'NEW_POST'} />
        <div className="container-fluid">
          <div className="row">
            <div className="col col-md-2 col-xs-12" />
            <div className="col-md-8 col-xs-12">
              <h5>Step 3 of 5</h5>
              <h1>Define influencer deliverables</h1>
              <h4>0 of 2 complete</h4>
              <CreatePost />
            </div>
          </div>
        </div>
        <footer>
          <hr />
          Back
        </footer>
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
)(PostList);

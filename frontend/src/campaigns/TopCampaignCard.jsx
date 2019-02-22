import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {
  fetchPosts,
  fetchCategories,
  setActiveCategory,
} from './../actions/posts';
import { connect } from 'react-redux';


class TopCampaignCard extends Component {
  render() {
    return (
        <Card  className="mb-4">
            <CardActionArea>
                <CardMedia
                    style={{width:'100%',height:'7em'}}
                    image="https://loremflickr.com/320/240/paris"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <div className="top-campaign-card">
                        <span className="top-campaign-card__category-icon"  
                              style={{background:"url(https://loremflickr.com/100/100/paris)"}} 
                        />
                      
                        <p className="top-campaign-card__white-text">
                            Best awareness
                        </p>
                        <h5 className="top-campaign-card__name">Lancom Bafta</h5>
                      
                        <p>
                            <span className="top-campaign-card__green">59% </span>
                            better than £1.32 CPR benchmark

                        </p>
                       
                    </div>
                </CardContent>
            </CardActionArea>
          
        </Card>      
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
)(TopCampaignCard);

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
  fetchCampaigns,
} from './actions';
import { connect } from 'react-redux';


class CampaignCard extends Component {
  render() {
    return (
        <Card  className="mb-4">
            <CardActionArea>
                <CardMedia
                    style={{width:'100%',height:'14em'}}
                    image="https://loremflickr.com/320/240/paris"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <div className="campaign-card">
                        <span
                            style={{background:"url(https://loremflickr.com/100/100/paris)"}} 
                            className="campaign-card--brand-logo"
                        />
                        <h5>Lancom Bafta</h5>
                        <ul>
                            <li>
                                Instagram
                            </li>
                            <li>
                                Youtube
                            </li>
                        </ul>
                        <p>
                            Kristen Leanne

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
)(CampaignCard);

import { combineReducers } from 'redux';

import CampaignReducer from './../create-campaign/reducer' ; 
import CampaignsReducer from './../campaigns/reducer' ; 

import {reducer  as formReducer}  from 'redux-form' ;

const rootReducer = combineReducers({
  campaign: CampaignReducer,
  campaigns: CampaignsReducer,
  form: formReducer
});

export default rootReducer;

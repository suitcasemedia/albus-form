// import { combineReducers} from 'redux' ;
//import post from './reducer_post'
import {RECEIVE_CAMPAIGNS ,
} from './actions' ;

import {NEW_CAMPAIGN } from './../create-campaign/actions' ;
//maybe import lodash
export default function(state = {}, action){
    console.log('reducer: ', state, action)
switch (action.type){
    case RECEIVE_CAMPAIGNS :{
        const {campaigns} = action;
        return {
            ...state,
              campaigns:[...campaigns]
        }
    }
    case NEW_CAMPAIGN:{
        const {campaign} = action;
        const {id} = campaign ;
        const { campaigns } = state 
        
        return {
            ...state,
            campaigns: [ ...campaigns , campaign],
        }
    }
            
    default:
        return state;
}   
}
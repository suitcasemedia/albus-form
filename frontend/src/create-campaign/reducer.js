// import { combineReducers} from 'redux' ;
//import post from './reducer_post'
import {
    NEW_CAMPAIGN ,
   
    } from './actions' ;
//maybe import lodash
export default function(state = {}, action){
switch (action.type){
    
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
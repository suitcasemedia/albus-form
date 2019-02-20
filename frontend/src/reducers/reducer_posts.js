// import { combineReducers} from 'redux' ;
//import post from './reducer_post'
import {
        NEW_POST ,
       
        } from '../actions/posts' ;
//maybe import lodash
export default function(state = {}, action){
    switch (action.type){
        
        case NEW_POST:{
            const {post} = action;
            const {id} = post ;
            const { posts } = state 
            
            return {
                ...state,
                posts: [ ...posts , post],
            }
        }
       
                 
        default:
            return state;
    }   
}
import React, { Component } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import moment from 'moment';



//import { Link, Redirect } from 'react-router-dom';
//import { createPost } from '../actions/posts';
import '../../App.css';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';


const renderNumberField = ({input, label, meta: {touched, error}, ...custom}) => (
    <TextField
             
              label={label}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
              errorText={touched && error}
              {...input}
              {...custom}
            />
    )
    


const onSubmit = values => {};

const ResetPassword = props => {
  return (
    <div className="onboarding">
    <header>
        <h1 className="pt-5 pl-5" style={{fontWeight:'bold',color:'red'}}>Albus</h1>
    </header>
    <div  style={{height: '100vh'}}className="row align-items-center justify-content-center">
     <div className="col-md-3"/>
     <div className="col-md-6 align-middle">
     <form className="p-5">
        <h1 style={{fontWeight:'280'}} className="text-center">L'OREAL</h1>
        <h5 className="text-center p-5">Reset your password</h5>
       
     
        <p> 
            Check your email for a link to reset your password. If it doesn't appear within a few minutes, check your spam folder.
        
        </p>
       
          <div style={{width:"220px"}} className="mx-auto mt-5">
            <span className='signup-btn signup-btn--outline'> Return to sign in </span>
           
          </div>
      
      </form>
        
      
      
     </div>
     <div className="col-md-3"/>
     
    </div>
    </div>
  );
};
export default reduxForm({
  form: 'onboardingForm', // a unique identifier for this form
  validate,
})(ResetPassword);

function validate(values) {
  const errors = {};
  //   valitate the inputs from 'values'
  if (!values.title || values.title.length < 3) {
    errors.title = 'Enter a title that is at least 3 characters long';
  }
  if (!values.category) {
    errors.category = 'Enter a Category';
  }
  if (!values.body) {
    errors.body = 'Enter some content please';
  }
  if (!values.author) {
    errors.author = 'Enter some content please';
  }

  return errors;
}

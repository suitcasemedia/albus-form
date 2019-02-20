import React, { Component } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import moment from 'moment';



//import { Link, Redirect } from 'react-router-dom';
//import { createPost } from '../actions/posts';
import '../../App.css';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';


const renderTextField = ({input, label, meta: {touched, error}, ...custom}) => (
    <TextField
     
      label={label}
      errorText={touched && error}
      {...input}
      {...custom}
    />
  )

  const renderPasswordField = ({placeholder,input, label, meta: {touched, error}, ...custom}) => (
    <TextField
      type="password"
      label={label}
      placeholder={placeholder}
      hintText={label}
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      {...custom}
    />
  )


const onSubmit = values => {};

const Onboarding1Varify = props => {
  return (
    <div className="onboarding">
    <header>
        <h1 className="pt-5 pl-5" style={{fontWeight:'bold',color:'red'}}>Albus</h1>
    </header>
    <div  style={{height: '100vh'}}className="row align-items-center justify-content-center">
     <div className="col-md-3"/>
     <div className="col-md-6 align-middle">
     <form className="p-5">
        <h1 style={{fontWeight:'300'}} className="text-center">L'OREAL</h1>
        <h5 className="text-center"> Sign in to your account</h5>
       
     
        
        <FormControl fullWidth marginNormal>
           
            <Field
              label="Email address"
              name="email"
              component={renderTextField}
              placeholder="Enter your L'Oreal email address"
            />
          
            <Field
              label="Authentification code"
              name="authentification-code"
              component={renderPasswordField}
              placeholder="Enter your password"
            />
            <small className="text-right pt-2">
              <a href="">Forgotten your password?</a>
            </small>
          
          
          </FormControl>
          <div style={{width:"150px"}} className="mx-auto mt-5">
            <span className='signup-btn' >Sign in </span>
           

          </div>
          <div style={{width:"250px"}} className="mx-auto mt-3">
           
            <small>
                Don't have an Albus account yet? <a href="">Sign up</a>
            </small>

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
})(Onboarding1Varify);

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

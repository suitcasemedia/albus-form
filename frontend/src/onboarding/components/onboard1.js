import React, { Component } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import moment from 'moment';



// import '../../App.css';
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

const Onboarding1 = props => {
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
        <h5 className="text-center"> Create your personal account</h5>
       
        
        <FormControl fullWidth >
            <Field
              label="First Name"
              name="first name"
              component={renderTextField}
              placeholder="Enter your first name"
            />

            <Field
              label="Last Name"
              name="last name"
              component={renderTextField}
              placeholder="Enter your last name"
            />
             <Field
              label="Email Address"
              name="email"
              component={renderTextField}
              placeholder="Enter your L'Oreal email address"
            />
             <Field
              label="Choose a password"
              name="password"
              component={renderPasswordField}
              placeholder="Enter a secure password"
            />
            <hr/>
           <small> Your password must contain at least 8 characters and can’t be entirely numeric.
Make sure your password isn’t too similar to your other personal information or a commonly used password.</small>
          </FormControl>
          <div style={{width:"100px"}} className="mx-auto mt-5">
            <span className='signup-btn' >Sign up </span>
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
})(Onboarding1);

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

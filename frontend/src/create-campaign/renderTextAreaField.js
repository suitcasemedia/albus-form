import React, { Component } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import moment from 'moment';



//import { Link, Redirect } from 'react-router-dom';
//import { createPost } from '../actions/posts';
//import '../../App.css';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';


const renderTextAreaField = ({input, label, meta: {touched, error}, ...custom}) => (
    <TextField
     
      multiline={true}
      rows={5}
      label={label}
      errorText={touched && error}
      {...input}
      {...custom}
    />
  )

export default renderTextAreaField
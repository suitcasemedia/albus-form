import React, { Component } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import moment from 'moment';
import Select from 'react-select';


//import { Link, Redirect } from 'react-router-dom';
//import { createPost } from '../actions/posts';
//import '../../App.css';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';


class renderMultiSelectField extends React.Component  {

    state = {
        selectedOption: null,
      }
      handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
      }

   render(){
    const {input, label, meta: {touched, error}, ...custom}= this.props
    const { selectedOption } = this.state;

    return(
        
        <Select
        isMulti={true}
        value={input.value}
        onChange={input.onChange}
        onBlur={() => input.onBlur(input.value)}
        options={this.props.options}
        placeholder={this.props.placeholder}
        className="form-control"
        simpleValue
      />
    


    )
       

   }
    
}

export default renderMultiSelectField
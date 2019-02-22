import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderTextField from './renderTextField'
import FormControl from '@material-ui/core/FormControl';

const Form1 = props => {
  const { handleSubmit } = props
  return (
    <div className="col-md-12">
     
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-12">
          <h6>Step 1 of 5</h6>
          <h2>Define your campaign</h2>
          <FormControl fullWidth marginNormal>
            <Field
              name="firstName"
              type="text"
              component={renderTextField}
              label="Campaign name"
            />
          
          
        
            <Field
              name="lastName"
              type="text"
              component={renderTextField}
              label="Last Name"
            />
             </FormControl>
          </div>
        
        
        
        
        </div>
       
        <div>
          <button onClick={()=>props.navTo(0)} type="submit" className="next">
            Next
          </button>
        </div>
      </form>
     
    </div>
  )
}

export default reduxForm({
  form: 'wizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(Form1)

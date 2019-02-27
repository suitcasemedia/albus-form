import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import RenderMultiSelectField from './renderMultiSelectField'

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false

const Form2 = props => {
  const { handleSubmit, previousPage } = props
  const influencers = 
  [ 
    {value: 'Benjamin Lowy', label : 'Benjamin Lowy'},
    {value: 'Murad Osman', label : 'Murad Osmann'},
    {value: 'Michael Yamasahit', label : 'Michael Yamashita'},
    {value: 'Stacy Kranitz', label : 'Stacy Kranitz'},
    {value: 'Jimmy Chin', label : 'Jimmy Chin'},
    {value: 'Gueorgui Pinkhassov', label : 'Gueorgui Pinkhassov'},
    {value: 'Dustin Giallanza', label : 'Dustin Giallanza'},
  ];
  return (
    <form onSubmit={handleSubmit}>
     
      <div>
      <h6>Step 2 of 5</h6>
      <h2>Which influencers are you working with?</h2>
      <div className="mt-4 mb-4">
                <small  className="mt-4 mb-4">Infuencer name</small>
                <br/>
                <br/>
            <Field
              name="influencers"
              type="text"
              component={RenderMultiSelectField}
              options={influencers}
              placeholder="Start typing influencer name here..."
             
            />
         </div>
         </div>
    </form>


  )
}

export default reduxForm({
  form: 'wizard', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(Form2)
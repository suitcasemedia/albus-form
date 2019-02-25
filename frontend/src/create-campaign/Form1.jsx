import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderTextField from './renderTextField'
import RenderSelectField from './renderSelectField'
import FormControl from '@material-ui/core/FormControl';
import renderTextAreaField from './renderTextAreaField';

const Form1 = props => {

  const { handleSubmit } = props;
  const brandOptions = 
  [ 
    {value: 'loreal', label : 'loreal'},
    {value: 'diesel', label : 'diese'},
    {value: 'Victor & Rolf', label : 'Victor & Rolf'}
  ];

  const categoryOptions =  [ 
    {value: 'makeup', label : 'makeup'},
    {value: 'shampoo', label : 'shampoo'},
    {value: 'hair colour', label : 'hair colour'},
    {value: 'jeans', label : 'jeans'},
    {value: 'fashion', label : 'fashion'}
  ];

   const campaignObjectives =  [ 
    {value: 'grow market share', label : 'grow market share'},
    {value: 'increase sales', label : 'increase sales'},
    {value: 'brand awareness', label : 'brand awareness'},
    {value: 'launch new products', label : 'launch new products'},
    {value: 'Target new customers', label : 'target new customers'},
    {value: 'Enter new markets', label : 'Enter new markets'},
    {value: 'Improve relations', label : 'Improve relations'},
    {value: 'Improve internal communications', label : 'Improve internal relationships'},
    {value: 'Increase profit', label : 'Increase profit'},

  ];
  

  return (
    <div className="col-md-12">
    
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-12">
            <h6>Step 1 of 5</h6>
            <h2>Define your campaign</h2>
              <div className="mt-4 mb-4">
                <small  className="mt-4 mb-4">Which brand is the campaign for?</small>
                <br/>
                <br/>

                <Field
                  name="brand"
                  type="text"
                  component={RenderSelectField}
                  label="Campaign name"
                  options={brandOptions}
                  placeholder="Select brand..."
                />
        
               
              </div>
        
              <div className="mt-4 mb-4">
                <small>What product category is the campaign for?</small>
                <br/>
                <br/>
                <Field
                  name="productCategory"
                  type="text"
                  component={RenderSelectField}
                  label="Last Name"
                  options={categoryOptions}
                  placeholder="Select brand..."
                />
              
              </div>

              <div className="mt-4 mb-4">
                <small>What is the campaign objective?</small>
                <br/>
                <br/>
                <Field
                  name="productCategory"
                  type="text"
                  component={RenderSelectField}
                  label="Last Name"
                  options={campaignObjectives}
                  placeholder="Select campaign objective..."
                />
              
              </div>

              <div className="mt-4 mb-4">
                <small>What is the campaign called?</small>
                <br/>
                <br/>
                <FormControl fullWidth no-margin>
                  <Field
                    name="campaignName"
                    type="text"
                    component={renderTextField}
                    label="Type campaign name"
                    options={categoryOptions}
                    placeholder="Type campaign name..."
                  />
                  
                </FormControl>
              
              
              </div>

              <div className="mt-4 mb-4">
                <small>Describe your campaign</small>
                <br/>
                <br/>
                <FormControl fullWidth no-margin>
                  <Field
                    name="campaignDescription"
                    type="text"
                    component={renderTextAreaField}
                    label="Describe your campaign"

                    placeholder="Describe the campaign..."
                  />
                  
                </FormControl>
              
              
              </div>

            
          </div>
        </div>
       
       
      </form>
      <div className="row">
        <div className="col-md-12">
          <footer>
          <hr />
           <div>
            <button onClick={()=>props.navTo(0)} type="submit" className="float-right next">
              Next
            </button>
          </div>
        </footer>       
        </div> 
      </div>      
    </div>
  )
}

export default reduxForm({
  form: 'wizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(Form1)

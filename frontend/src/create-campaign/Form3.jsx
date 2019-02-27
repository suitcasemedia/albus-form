import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {connect} from 'react-redux';
import validate from './validate'
const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet']

const renderColorSelector = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input}>
      <option value="">Select a color...</option>
      {colors.map(val => (
        <option value={val} key={val}>
          {val}
        </option>
      ))}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
)

let Form3 = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
      <h6>Step 3 of 5</h6>
      <h2>Define influencer deliverables?</h2>
      <ul>
        { props.influencers.length > 0 && props.influencers.map(influencer=> {
          return(<li onCLick={()=>this.showDeliverablesForm(influencer.value)} >{influencer.value}</li>)
        }
        
        )}


      </ul>
        
      </div>
    
    </form>
  )
}
const mapStateToProps = (state) => {
  // ...
  const {form} = state;
  const {wizard} = form;
  const values = wizard.values ? wizard.values: '';
  const influencers = values.influencers ? values.influencers :'';

  return{
    influencers 
  }

};

const mapDispatchToProps = (dispatch)  => ({
  // ...
});


Form3 = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form3);

export default reduxForm({
  form: 'wizard', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(Form3)
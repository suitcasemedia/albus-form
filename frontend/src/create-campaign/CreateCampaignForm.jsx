import React, { Component } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

import DatePicker from 'react-datepicker';

//import { Link, Redirect } from 'react-router-dom';
//import { createPost } from '../actions/posts';
import '../App.css';

const renderInstagramSelect = field => {
  const {
    meta: { touched, error },
  } = field;

  return (
    <div className="">
      <label>{field.label}</label>
      <select className="form-control " {...field.input}>
        <option>please select a content type</option>
        <option value="post">Post</option>
        <option value="story">Story</option>
      </select>
      <div className="text-help invalid-feedback">{touched ? error : ''}</div>
    </div>
  );
};

const renderYoutubeSelect = field => {
  const {
    meta: { touched, error },
  } = field;

  return (
    <div className="">
      <label>{field.label}</label>
      <select className="form-control " {...field.input}>
        <option>please select a content type</option>
        <option value="video">Video</option>
        <option value="playlist">Playlist</option>
      </select>
      <div className="text-help invalid-feedback">{touched ? error : ''}</div>
    </div>
  );
};

const renderOtherSocialMediaSelect = field => {
  const {
    meta: { touched, error },
  } = field;

  return (
    <div className="">
      <label>{field.label}</label>
      <select className="form-control " {...field.input}>
        <option>please select a social network</option>
        <option value="Facebook">Facebook</option>
        <option value="twitter">Twitter</option>
        <option value="reddit">Reddit</option>
        <option value="snapchat">SnapChat</option>
      </select>
      <div className="text-help invalid-feedback">{touched ? error : ''}</div>
    </div>
  );
};

const renderInstagram = ({
  fields,
  meta: { touched, error, submitFailed },
}) => (
  <div>
    <div className="row">
      <div className="col-md-12">
        <h5>INSTAGRAM</h5>
      </div>
    </div>

    {(touched || submitFailed) && error && <span>{error}</span>}

    {fields.map((instagramDeliverable, index) => (
      <div key={index} className="row">
        <div className="col-md-6" style={{ padding: '0px', margin: '0px' }}>
          <Field
            name={`${instagramDeliverable}.contentType`}
            component={renderInstagramSelect}
          />
        </div>

        <div className="col-md-6">
          <Field
            name={`${instagramDeliverable}.date`}
            label="Category"
            component={ReduxFormDateRange}
          />
        </div>
      </div>
    ))}
    <a style={{ color: 'red' }} onClick={() => fields.push({})}>
      + Add a post
    </a>
  </div>
);

const renderYouTube = ({ fields, meta: { touched, error, submitFailed } }) => (
  <div>
    <div className="row">
      <div className="col-md-12">
        <h5>YOUTUBE</h5>
      </div>
    </div>

    {(touched || submitFailed) && error && <span>{error}</span>}

    {fields.map((YouTubeDeliverables, index) => (
      <div key={index} className="row">
        <div className="col-md-6" style={{ padding: '0px', margin: '0px' }}>
          <Field
            name={`${YouTubeDeliverables}.contentType`}
            component={renderYoutubeSelect}
          />
        </div>

        <div className="col-md-6">
          <Field
            name={`${YouTubeDeliverables}.date`}
            label="Category"
            component={ReduxFormDateRange}
          />
        </div>
      </div>
    ))}
    <a style={{ color: 'red' }}  onClick={() => fields.push({})}>
      + Add a post
    </a>
  </div>
);

const renderOtherSocialMedia = ({
  fields,
  meta: { touched, error, submitFailed },
}) => (
  <div>
    <div className="row">
      <div className="col-md-12">
        <h5>OTHER SOCIAL MEDIA</h5>
      </div>
    </div>

    {(touched || submitFailed) && error && <span>{error}</span>}

    {fields.map((OtherSocialMedia, index) => (
      <div className="row">
        <div className="col-md-6">
          <Field
            name={`${OtherSocialMedia}.contentType`}
            component={renderOtherSocialMediaSelect}
          />
        </div>
        <div className="col-md-6">
          <p>
            *We're unable to track these social networlks at the moment, but we
            will take these into account when we break down the campaign spend.
          </p>
        </div>
      </div>
    ))}
    <a style={{ color: 'red' }}  onClick={() => fields.push({})}>
      + Add a social network
    </a>
  </div>
);

const CheckboxGroup = () => (
  <div className="row">
    {[
      { name: 'Event' },
      { name: 'Website content' },
      { name: 'In-store appearance' },
      { name: 'Newsletter' },
      { name: 'Other' },
    ].map((option, index) => (
      <div className="col-md-4" key={index}>
        <label>
          <input type="checkbox" name="hello" value={option.name} />
          {option.name}
        </label>
      </div>
    ))}
  </div>
);

const ReduxFormDateRange = field => {
  return (
    <div className="form-group">
      <DatePicker
        className="form-control"
        dateFormat="dd/MM/YYYY"
        selected={field.input.value || new Date()}
        onChange={field.input.onChange}
      />
    </div>
  );
};
const renderField = field => {
  const {
    meta: { touched, error },
  } = field;

  const className = `form-control ${touched && error ? 'is-invalid' : ''}`;
  return (
    <div className="form-group">
      <label>{field.label}</label>
      <input className={className} type="text" {...field.input} />
      <div className="text-help invalid-feedback">{touched ? error : ''}</div>
    </div>
  );
};
const onSubmit = values => {};

const CreateCampaignForm = props => {
  return (
    <div className="form-wrapper">
     <h1>hello</h1>
      <div className="App-header">
        <h2>Zoe Sugg</h2>
      </div>
      <form>
        <h5> Social deliverables</h5>
        What posts have you asked Zoe to do?
        <FieldArray name="instagram-deliverables" component={renderInstagram} />
        <FieldArray name="youtube-deliverables" component={renderYouTube} />
        <FieldArray
          name="other-social-network"
          component={renderOtherSocialMedia}
        />
        <hr />
        <h5>Other paid content</h5>
        {CheckboxGroup()}
        <p>Have you asked Zoe to create any further content?</p>
        <hr />
        <h5>Usage fee</h5>
        <div className="row">
          <div className="col-md-6">radio buttons</div>
          <div className="col-md-6">
            <Field
              label="Post Content"
              name="usage-fee"
              component={renderField}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6" />
          <div className="col-md-6" />
        </div>
        <hr />
        <h5>Total fee</h5>
        How much are you paying Zoe in total?
        <div className="row">
          <div className="col-md-6">
            <Field
              label="Post Content"
              name="total-fee"
              component={renderField}
            />
          </div>
          <div className="col-md-3" />
          <div className="col-md-3  pt-4">
            <button type="submit" className="btn ml-1">
              Cancel
            </button>
            <button type="submit" className="btn btn-red">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default reduxForm({
  form: 'influencerDeliverablesForm', // a unique identifier for this form
  validate,
})(CreateCampaignForm);

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

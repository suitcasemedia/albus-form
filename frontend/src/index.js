import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route ,Switch} from 'react-router-dom'
import {createStore, applyMiddleware, compose} from 'redux' ;
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import reducer from './reducers' ;
import Onboard1 from './onboarding/components/onboard1';
import Onboard1Varify from './onboarding/components/onboard1-varify';  
import SignIn from './onboarding/components/signin';  
import TwoStepVarify from './onboarding/components/signin-2-step-verify';  
import ResetPassword from './onboarding/components/reset-password';
import CampaignsList from './campaigns/CampaignsList';
import TopCampaignsList from './campaigns/TopCampaignsList';
import registerServiceWorker from './registerServiceWorker';
import './font-awesome/css/font-awesome.min.css'
import './App.css';
import CreateCampaignNavPage from './create-campaign/CreateCampaignNavPage';
import CreateCampaignForm from './create-campaign/CreateCampaignForm';
import DeliverablesForm from './components/DeliverablesForm';

const logger = store => next => action  => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd(action.type)
    return result
}
const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    
const store = createStore(

    reducer,
    composeEnhancers(
        applyMiddleware(/*logger,*/ thunk)
    )
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={DeliverablesForm} />
          <Route exact path="/signup" component={Onboard1} />
          <Route exact path="/signup-varify" component={Onboard1Varify} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signin-2-step-varify" component={TwoStepVarify} />
          <Route exact path="/reset-password" component={ResetPassword} />
          <Route exact path="/campaigns" component={CampaignsList} />    
          <Route exact path="/top-campaigns" component={TopCampaignsList} /> 
          <Route exact path="/create-campaign" component={CreateCampaignNavPage} /> 
          <Route exact path="/create-campaign-form" component={CreateCampaignForm} /> 
                 
        </Switch>
      </div>

    </BrowserRouter>
  </Provider>

    , document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
//import HomePage from './components/homepage';
import Homepage from './components/homepage';
import AddQuestion from './components/add_question';
import SendSurvey from './components/send_survey';
import Registration from './components/registration';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Homepage}/>
    <Route path="addQuestion" component={AddQuestion}/>
    <Route path="sendSurvey" component={SendSurvey}/>
    <Route path="registration" component={Registration}/>
  </Route>
);

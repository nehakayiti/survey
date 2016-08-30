import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {Router, browserHistory} from 'react-router';
import routes from './routes';

// Render component APP into the screen (container in main.html)
Meteor.startup(() => {
  ReactDOM.render(
    <Router history={browserHistory} routes={routes}/>,
    document.querySelector('.container'));
    // Initialize Firebase
     var config = {
       apiKey: "AIzaSyDO81CiJ4BiZ7DyhwKDgj_zrHs5tUjmzJk",
       authDomain: "survey-9a352.firebaseapp.com",
       databaseURL: "https://survey-9a352.firebaseio.com",
       storageBucket: "",
     };
     firebase.initializeApp(config);
});

import React from 'react';
import {Link} from 'react-router';

var h3Style = {
  fontFamily: 'fantasy',
};

const EnterTitle = () => {
	return(
    <div>
      <h5 style={h3Style}>Enter Survey Title:</h5>
      <input id="title" className="white"></input>
    </div>
	);
};

export default EnterTitle;

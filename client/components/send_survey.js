import React from 'react';

//Style of words
var wordStyle = {
  fontFamily: 'fantasy',
};

const SendSurvey = () => {
	return(
    <div>
      <h5 style={wordStyle}>Send your survey by email</h5>
      <h5 style={wordStyle}>or</h5>
      <h5 style={wordStyle}>Porst on social media</h5>
    </div>
	);
};

export default SendSurvey;

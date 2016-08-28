import React from 'react';

//Style of words
var h3Style = {
  fontFamily: 'fantasy',
};

const SurveySteps = () => {
  return(
    <div style={h3Style}>
      <h4>Create a survey in 3 steps:</h4>
      <h5>1. Enter the title of your survey</h5>
      <h5>2. Add the questions</h5>
      <h5>3. Send your survey</h5>
    </div>
  );
};

export default SurveySteps;

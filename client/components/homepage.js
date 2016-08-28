import React from 'react';
import SurveySteps from './survey_steps';
import CreateSurveyButton from './create_survey_btn';

const Homepage = () => {
  return(
    <div>
      <SurveySteps />
      <CreateSurveyButton />
    </div>
  );
};

export default Homepage;

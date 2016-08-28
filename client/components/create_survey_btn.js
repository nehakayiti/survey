import React from 'react';
import {Link} from 'react-router';


const CreateSurveyButton = () => {
	return(
    <div>
			<Link
				to="/addQuestion"
				className="waves-effect waves-light btn-large grey">
				Continue
			</Link>
    </div>
	);
};

export default CreateSurveyButton;

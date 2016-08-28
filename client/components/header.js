import React from 'react';

// create component
const Header = (props) => {
  return(
    <div>
      <nav>
        <div className="nav-wrapper grey">
          <a href="" className="brand-logo">Online Voting System</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="">Homepage</a></li>
            <li><a href="">Enter Title</a></li>
            <li><a href="">Add Questions</a></li>
            <li><a href="">Send Survey</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;

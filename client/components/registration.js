import React, {Component} from 'react';

class Registration extends Component{
    constructor(props){
      super(props);
    }

    componentWillMount(){
    }

    render(){
      return(
        <div>
          <table className="bordered">
            <tbody>
              <tr>
                <td className="input-field col s12">
                  <input id="first_name" type="text" className="validate"></input>
                  <label htmlFor="first_name">First Name</label>
                </td>
                <td className="input-field col s12">
                  <input id="last_name" type="text" className="validate"></input>
                  <label htmlFor="last_name">Last Name</label>
                </td>
              </tr>
              <tr>
                <td>
                  <a className="dropdown-button btn grey" href="#" data-activates="ageDropdown">Age</a>
                    <ul id="ageDropdown" className="dropdown-content">
                      <li><a href="#">18-20</a></li>
                      <li className="divider"></li>
                      <li><a href="#">20-30</a></li>
                      <li className="divider"></li>
                      <li><a href="#">30-40</a></li>
                      <li className="divider"></li>
                      <li><a href="#">40-50</a></li>
                      <li className="divider"></li>
                      <li><a href="#">50-60</a></li>
                      <li className="divider"></li>
                      <li><a href="#">60-70</a></li>
                      <li className="divider"></li>
                      <li><a href="#">70 and above</a></li>
                    </ul>
                </td>
                <td>
                  <a className="dropdown-button btn grey" href="#" data-activates="genderDropdown">Gender</a>
                    <ul id="genderDropdown" className="dropdown-content">
                      <li><a href="#">male</a></li>
                      <li className="divider"></li>
                      <li><a href="#">female</a></li>
                      <li className="divider"></li>
                      <li><a href="#">I do not wish to answer</a></li>
                    </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <a className="dropdown-button btn grey" href="#" data-activates="ethnicityDropdown">Ethnicity</a>
                    <ul id="ethnicityDropdown" className="dropdown-content">
                      <li><a href="#">Caucasian</a></li>
                      <li className="divider"></li>
                      <li><a href="#">African American</a></li>
                      <li className="divider"></li>
                      <li><a href="#">Hispanic</a></li>
                      <li className="divider"></li>
                      <li><a href="#">Asian</a></li>
                      <li className="divider"></li>
                      <li><a href="#">Native American</a></li>
                      <li className="divider"></li>
                      <li><a href="#">Pacific Islander</a></li>
                      <li className="divider"></li>
                      <li><a href="#">Middle Eastern</a></li>
                      <li className="divider"></li>
                      <li><a href="#">Other</a></li>
                    </ul>
                </td>
                <td>
                  <a className="dropdown-button btn grey" href="#" data-activates="eduDropdown">Education Level</a>
                    <ul id="eduDropdown" className="dropdown-content">
                      <li><a href="#">Less than high school</a></li>
                      <li className="divider"></li>
                      <li><a href="#">High school diploma</a></li>
                      <li className="divider"></li>
                      <li><a href="#">College, no degree</a></li>
                      <li className="divider"></li>
                      <li><a href="#">Postsecondary non-degree award</a></li>
                      <li className="divider"></li>
                      <li><a href="#">Associates degree</a></li>
                      <li className="divider"></li>
                      <li><a href="#">Bachelors degree</a></li>
                      <li className="divider"></li>
                      <li><a href="#">Masters degree</a></li>
                      <li className="divider"></li>
                      <li><a href="#">Doctoral or professional degree</a></li>
                    </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <a className="dropdown-button btn grey" href="#" data-activates="incomeDropdown">Salary/Income</a>
                    <ul id="incomeDropdown" className="dropdown-content">
                      <li><a href="#">$20,000 or below</a></li>
                      <li className="divider"></li>
                      <li><a href="#">$20,000 to $30,000</a></li>
                      <li className="divider"></li>
                      <li><a href="#">$30,000 to $60,000</a></li>
                      <li className="divider"></li>
                      <li><a href="#">$60,000 to $100,000</a></li>
                      <li className="divider"></li>
                      <li><a href="#">$100,000 to $200,000</a></li>
                      <li className="divider"></li>
                      <li><a href="#">$200,000 or above</a></li>
                    </ul>
                </td>
                <td>
                  <a className="dropdown-button btn grey" href="#" data-activates="employmentDropdown">Employment</a>
                    <ul id="employmentDropdown" className="dropdown-content">
                      <li><a href="#">Employed full-time</a></li>
                      <li className="divider"></li>
                      <li><a href="#">Employed part-time</a></li>
                      <li className="divider"></li>
                      <li><a href="#">Temporary full-time employment</a></li>
                      <li className="divider"></li>
                      <li><a href="#">Temporary part-time employment</a></li>
                      <li className="divider"></li>
                      <li><a href="#">Retired</a></li>
                      <li className="divider"></li>
                      <li><a href="#">Unemployed</a></li>
                    </ul>
                </td>
              </tr>
            </tbody>
          </table>
          <br/>
          <button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
        </div>
    	);
    }
};

export default Registration;

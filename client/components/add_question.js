import React, {Component} from 'react';
import {Link} from 'react-router';
import EnterTitle from './enter_title';

//Style of words
var wordStyle = {
  fontFamily: 'fantasy',
};

class AddQuestion extends Component{

  constructor(props){
    super(props);

    this.state = {
      title: "",
      question: "",
      answers: ""
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange(event){
    const val = event.target.value;
    this.setState({question: val});
  }

  handleSubmit(e){
    e.preventDefault();
    console.log("clicked submit button");
    console.log(this.state);
  }


  render(){
    return(
      <form>
      <div>
        <EnterTitle />
        <br/>
        <hr/>
        <br/>
        <h5 style={wordStyle}>Add question:</h5>
        <input  id="question"
                type="text"
                value={this.state.question}
                onChange={this.onChange}
                className="validate white">
        </input>
        <br/>
        <hr/>
        <br/>
        <h5 style={wordStyle}>Enter answer choice:</h5>
        <ul className="">
          <li><input id="answer" type="text" className="validate white"></input></li>
          <li><input id="answer" type="text" className="validate white"></input></li>
          <li><input id="answer" type="text" className="validate white"></input></li>
          <li><input id="answer" type="text" className="validate white"></input></li>
          <br/>
          <a className="waves-effect waves-light btn grey">Add another answer</a>
          <br/>
          <br/>
          <hr/>
          <br/>
          <a className="waves-effect waves-light btn grey">Add another question</a>
          <br/>
          <br/>
          <button type="submit" onClick={this.handleSubmit.bind(this)} className="btn btn-primary">Submit</button>
          <br/>
          <br/>
          <Link
            to="/sendSurvey"
            className="waves-effect waves-light btn grey">
            Continue
          </Link>
        </ul>
      </div>
      </form>
  	);
  }

}

export default AddQuestion;

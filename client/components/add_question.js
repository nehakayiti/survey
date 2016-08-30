import React, {Component} from 'react';
import {Link} from 'react-router';
import Firebase from 'firebase';

//Style of words
var wordStyle = {
  fontFamily: 'fantasy',
};

class AddQuestion extends Component{

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      question: "",
      answer1: "",
      answer2: "",
      answer3: "",
      answer4: "",
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.state.title = this.refs.title.value;
    this.state.question = this.refs.question.value;
    this.state.answer1 = this.refs.answer1.value;
    this.state.answer2 = this.refs.answer2.value;
    this.state.answer3 = this.refs.answer3.value;
    this.state.answer4 = this.refs.answer4.value;
    console.log(this.state);
    firebase.database().ref('surveys/' + this.state.title + '/' + this.state.question).push({
        answer1: this.state.answer1,
        answer2: this.state.answer2,
        answer3: this.state.answer3,
        answer4: this.state.answer4,
  });
  }


  render(){
    return(
      <form>
        <div>
          <h5 style={wordStyle}>Enter Survey Title:</h5>
          <input id="title" className="white" ref="title"></input>
          <br/>
          <hr/>
          <br/>
          <h5 style={wordStyle}>Add question:</h5>
          <input id="question" type="text" className="validate white" ref="question"></input>
          <br/>
          <hr/>
          <br/>
          <h5 style={wordStyle}>Enter answer choice:</h5>
          <ul className="">
            <li><input id="answer" type="text" className="validate white" ref="answer1"></input></li>
            <li><input id="answer" type="text" className="validate white" ref="answer2"></input></li>
            <li><input id="answer" type="text" className="validate white" ref="answer3"></input></li>
            <li><input id="answer" type="text" className="validate white" ref="answer4"></input></li>
            <br/>
            {/*
            <a className="waves-effect waves-light btn grey">Add another answer</a>
            <br/>
            <br/>
            <hr/>
            <br/>
            <a className="waves-effect waves-light btn grey">Add another question</a>
            <br/>
            */}
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
  /*
    User1
      Survey
        question
          answer1
          answer2
        question
          answer1
          answer2
    user2
      Survey
        question
          answer1
          answer2
        question
          answer1
          answer2
  */
}

export default AddQuestion;

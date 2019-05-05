import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { CSSTransition  } from 'react-transition-group';
import Question from './Question.jsx';
import QuestionCount from './QuestionCount.jsx';
import AnswerOption from './AnswerOption.jsx';

class Quiz extends Component{
  constructor(props){
    super(props);
    this.renderAnswerOptions = this.renderAnswerOptions.bind(this);
  }

  renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={this.props.answer}
        questionId={this.props.questionId}
        onAnswerSelected={this.props.onAnswerSelected}
      />
    );
  }

  render() {
    return(
    <CSSTransition 
      className="container"
      timeout={200} 
      component="div"
    >
      <div key={this.props.questionId}>
        <QuestionCount counter={this.props.questionId} total={this.props.questionTotal} />
        <Question content={this.props.question} />
        <ul className="answerOptions">
          {this.props.answerOptions.map(this.renderAnswerOptions)}
        </ul>
      </div>
    </CSSTransition>
    );
  }
}

Quiz.propTypes = {
  answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default Quiz;

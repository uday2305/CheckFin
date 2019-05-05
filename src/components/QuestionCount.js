import React,{Component} from 'react';
import PropTypes from 'prop-types';

class QuestionCount extends Component{
  
  render(){
    return (
      <div className="questionCount">
        Question <span>{this.props.counter}</span> of <span>{this.props.total}</span>
      </div>
    );
  }
}

QuestionCount.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default QuestionCount;

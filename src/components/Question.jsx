import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Question extends Component{
  
  render(){
    return <h2 className="question">{this.props.content}</h2>;
  }
}

Question.propTypes = {
  content: PropTypes.string.isRequired
};

export default Question;

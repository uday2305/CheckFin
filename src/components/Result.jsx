import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { CSSTransition  } from 'react-transition-group';

class Result extends Component{
  
  render(){
    return (
      <CSSTransition 
        className="container result"
        component="div"
        timeout={200} 
      >
        <div>
          You prefer <strong>{this.props.quizResult}</strong>!
        </div>
      </CSSTransition >
    );
  }
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;

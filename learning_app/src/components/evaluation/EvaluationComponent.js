import React, { Component } from "react";
import {Link} from 'react-router-dom';

class EvaluationComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lesson: []
    };

    
  }

  componentDidMount(){
    this.setState(
      {
        lesson: this.props.location.query.lesson
      }
    )
  }

  render() {
    return (
      <div className="evaluation">
        <div className="evaluationContent">
          <h3>
            Now You know about Learn and Understand Read World ! \n
            <b>Are you Ready to Validate your Learning ?</b>
          </h3>
          <Link 
            to={{
              pathname: '/quiz',
              query: {
                lesson: this.state.lesson
              }
            }}
          >
            <button>
               I am Ready, Let's Start !
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default EvaluationComponent;

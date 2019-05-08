import React, { Component } from 'react'

class QuizTotalQuestions extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            // totalQuestionCount: 0
         }
    }
    
    render() { 
        return ( 
            <div>
                <h5>Total questions [{this.props.totalQuestionCount}]</h5>
            </div>
         );
    }
}
 
export default QuizTotalQuestions;
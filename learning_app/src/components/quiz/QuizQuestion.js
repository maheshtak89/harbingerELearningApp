import React, { Component } from 'react'

class QuizQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <b>{this.props.questionId} &nbsp;&nbsp;</b>
                <b>{this.props.question}</b>
            </div>
         );
    }
}
 
export default QuizQuestion;
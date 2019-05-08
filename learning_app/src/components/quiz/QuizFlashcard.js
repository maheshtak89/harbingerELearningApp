import React, { Component } from 'react'
import QuizHeader from './QuizHeader';
import QuizQuestion from './QuizQuestion';
import QuizOptions from './QuizOptions';
import QuizAnswer from './QuizAnswer';
import QuizFooter from './QuizFooter';
import QuizTotalQuestions from './QuizTotalQuestions';

class QuizFlashcard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            questions: [],
            totalQuestionCount: 0,
            questionCounter: 1,
            question : '',
            options: [],
            answer: ''
         }
    }

    componentDidMount(){
        this.setState(
            {
                questions: this.props.location.query.lesson.quiz.questions,
                totalQuestionCount: this.props.location.query.lesson.quiz.questions.length,
                questionId: this.props.location.query.lesson.quiz.questions[0].id,
                question: this.props.location.query.lesson.quiz.questions[0].question
            }
        )
    }
    
    render() { 
        return ( 
            <div>
                <QuizHeader />
                <QuizTotalQuestions totalQuestionCount={this.state.totalQuestionCount}/>
                <QuizQuestion question={this.state.question} questionId={this.state.questionId}/>
                <QuizOptions answerOptions={this.props.location.query.lesson.quiz.questions[0].answerOptions}/>
                <QuizAnswer />
                <QuizFooter />
            </div>
         );
    }
}
 
export default QuizFlashcard;
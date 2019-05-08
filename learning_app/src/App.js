import React, { Component } from 'react';
import {  Switch, Route, Router} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import '../src/App.css'
import HomePage from './components/HomePage'
import ContentFlashCardComponent from './components/ContentFlashCardComponent';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import EvaluationComponent from './components/evaluation/EvaluationComponent';
import QuizFlashcard from './components/quiz/QuizFlashcard';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Switch>
            <Route 
              exact path='/' component={HomePage}
            />
            <Route 
              path='/contentFlashCard' 
              component={ContentFlashCardComponent}
              
            />
            <Route
              path='/dashboard'
              component={() => <ContentFlashCardComponent lessonData={true} />}
            />

            <Route
              path='/evaluation'
              component={EvaluationComponent}
            />
            <Route
              path='/quiz'
              component={QuizFlashcard}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

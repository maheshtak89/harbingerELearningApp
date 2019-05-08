/* eslint-disable no-unused-expressions */
import React, { Component } from 'react'
import ListItem from './ListItem';
import {get} from './../services/apiService.jsx'

import config from './../config'

class LessonList extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            lessons: []
        }
    }

    componentDidMount(){
        get(config.api.method.getMethod,'',config.api.endUrl.lesson_url,'').then((result)=>{
            this.setState(
                {
                    lessons:result.data
                });
        });

    }
 
    render() { 
        return ( 
            <div className='listItem'>
                <div className='appTitle'>
                    <h2 className="appTitle">Harbinger Learning App</h2>
                </div>
                {   
                    this.state.lessons.map(
                        (lesson, index) => {
                             return (
                                <div key={index}>
                                    <ListItem key={index} lesson={lesson} />
                                </div>
                            )
                        }
                    )
                }
            </div>
         );
    }
}
 
export default LessonList;
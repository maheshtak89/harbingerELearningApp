import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {get} from './../services/apiService'

import config from './../config'

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            lessons : [],
            name: '',
            skills: [],
            skill_img: "",
            skill_name: ""
         }            
    }

    componentDidMount(){
        let skill_Id = this.props.lesson.skill_Id;
        get(config.api.method.getMethod,skill_Id,config.api.endUrl.skillById,"").then((result)=>{
            this.setState(
                {
                    skills:result.data
                }); 
            this.setState(
                {
                    skill_img: this.state.skills[0].img,
                    skill_name: this.state.skills[0].name
                })
        });

        this.setState(
            {
                lessons: JSON.stringify(this.props)
            })

    }

    render() { 
        const { lesson } = this.props;
        return ( 
            <div className='listItem'>
                <Link to={{ 
                    pathname: `/contentFlashCard`, 
                    query: {
                        lesson: this.props.lesson
                    } 
                    }}>

                    <div className="listItem">
                        <img src={lesson.image} alt="HarbingerLogo" />
                        <h3 className="lessonTitle"> 
                            {lesson.title}
                        </h3>
                        <img src={this.state.skill_img} alt="topicImage" height="10%"/>
                        <h4 className="skillName">
                            {this.state.skill_name}
                        </h4>
                        <progress value="75" ></progress>
                    </div>
                </Link>
            </div>
         );
    }
}
 
export default ListItem;
import React, { Component } from 'react'

class ProgressbarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            pValue : 75
         }
    }

    componentDidMount(){
        this.setState(
            {
                pValue: this.props.pValue
            }
        )
    }
    render() { 
        return (
          <div>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped bg-danger"
                role="progressbar"
                aria-valuenow="10"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{width:`${this.state.pValue}%`}}
                
              />
            </div>
          </div>
        );
    }
}
 
export default ProgressbarComponent;
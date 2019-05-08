import React, { Component } from 'react';

class FlashcardHeader extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            pValue : 0
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
          <div className="header">
            <header className="w3-container w3-blue">
              <h2>{this.props.header}</h2>
            </header>

            <div className="progress">
              <div
                className="progress-bar progress-bar-striped bg-danger"
                role="progressbar"
                aria-valuenow="10"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: `${this.state.pValue}%` }}
              />
            </div>
          </div>
        );
    }
}
 
export default FlashcardHeader;
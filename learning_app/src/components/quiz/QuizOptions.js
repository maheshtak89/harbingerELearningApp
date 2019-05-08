import React, { Component } from "react";
import CheckBoxGroup from "./CheckBoxGroup";

class QuizOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      isChecked: false
    };
  }

  componentDidMount() {
    this.setState({
      options: this.props.answerOptions
    });
  }

  toggleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log("event", name, value);
    this.setState({
      [name]: value
    });
  };

  render() {
    const { answerOptions, isChecked } = this.props;
    if (answerOptions) {
      const listItems = answerOptions.map((option, i) => (
        <CheckBoxGroup
          key={i}
          option={option}
          checked={isChecked}
          toggleChange={this.toggleChange}
        />
      ));
      return <div>{listItems}</div>;
    } else {
      return <div />;
    }
  }
}

export default QuizOptions;

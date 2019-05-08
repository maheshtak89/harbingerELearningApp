import React, { Component } from "react";

class CheckBoxGroup extends Component {
  render() {
    const { isChecked, option } = this.props;
    return (
      <div>
        <input
          name={option}
          type="checkbox"
          checked={isChecked}
          onChange={this.props.toggleChange}
        />
        <label>{option}</label>
        <br />
      </div>
    );
  }
}

export default CheckBoxGroup;

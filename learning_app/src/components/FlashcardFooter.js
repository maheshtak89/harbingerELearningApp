/* eslint-disable react/style-prop-object */
import React, { Component } from "react";

class FlashcardFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <button>
          {" "}
          Previous <i className="fa fa-angle-double-right" />
        </button>
        <button>
          {" "}
          Next <i className="fa fa-angle-double-right" />
        </button>
      </div>
    );
  }
}

export default FlashcardFooter;

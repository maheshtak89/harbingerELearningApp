import React, { Component } from "react";

class FlashcardContent extends Component {
  pageData = {};
  imageURL = "";

  getId() {
    this.props.getPageId(this.props.page.id);
  }

  render() {
    const { page } = this.props;
    
    if (page) {
      if (page.text) {
        return <div>{page.text}</div>;
      } else {
        return <img src={page.image} alt="lesson" />;
      }
    } else {
      return <div />;
    }
  }
}

export default FlashcardContent;

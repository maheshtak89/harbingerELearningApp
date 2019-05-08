import React, { Component } from "react";
import { createBrowserHistory } from "history";
import FlashcardHeader from "./FlashcardHeader";
import FlashcardContent from "./FlashcardContent";
import { Link } from "react-router-dom";

class ContentFlashCardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lesson: [],
      pagesData: [],
      pageNumber: 0,
      pageCounter: 0,
      forwardFlag: false,
      backwardFlag: false,
      evaluate: false,
      pValue: 0,
      lastPage: true,
      redirect: false,
      pathName: "contentFlashCard"
    };
  }

  componentDidMount() {
    this.setState({
      lesson: this.props.location.query.lesson,
      pagesData: this.props.location.query.lesson.pages,
      pageNumber: this.props.location.query.lesson.pages.length - 1
    });

    if (this.state.pageCounter <= 0) {
      this.setState({ backwardFlag: true });
    }
  }

  getPageId(e) {
    this.setState({
      pageCounter: e
    });
  }

  changePageForward = () => {
    if (this.state.pageCounter < this.state.pageNumber) {
      this.setState({
        pageCounter: this.state.pageCounter + 1,
        backwardFlag: false,
        pValue: ((this.state.pageCounter + 1) * 100) / this.state.pageNumber
      });
    } else {
      console.log("last page");

      this.setState({
        redirect: true,
        pathName: "/evaluation"
      });
    }
  };

  changePageBackward() {
    if (this.state.pageCounter === 0) {
      this.setState({ backwardFlag: true });
    } else {
      this.setState({
        pageCounter: this.state.pageCounter - 1,
        forwardFlag: false,
        pValue: ((this.state.pageCounter + 1) * 100) / this.state.pageNumber
      });
    }
  }

  render() {
    return (
      <div>
        <div className="w3-card-4">
          <FlashcardHeader
            header={this.state.lesson.title}
            pValue={this.state.pValue}
          />
          {
            <FlashcardContent
              triggerParentUpdate={this.state.pagesData[this.state.pageCounter]}
              getPageId={this.getPageId.bind(this)}
              page={this.state.pagesData[this.state.pageCounter]}
            />
          }
          <div>
            <button
              disabled={this.state.pageCounter ? "" : "disabled"}
              onClick={this.changePageBackward.bind(this)}
            >
              {" "}
              Previous <i className="fa fa-angle-double-right" />
            </button>

            <Link
              to={{
                pathname: `${this.state.pathName}`,
                query: {
                  lesson: this.state.lesson
                }
              }}
            >
              <button
                disabled={this.state.forwardFlag}
                onClick={this.changePageForward}
              >
                {" "}
                Next <i className="fa fa-angle-double-right" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ContentFlashCardComponent;

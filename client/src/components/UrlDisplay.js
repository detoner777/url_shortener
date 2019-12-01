import React, { Component } from "react";
import { Popover, PopoverBody } from "reactstrap";
import "../App.css";

export class UrlDisplay extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  //копирует сокращенную ссылку
  handleClick() {
    this.props.handleClick();
  }

  toggle() {
    this.props.toggle();
  }
  render() {
    return (
      <div className="result-container" onClick={this.handleClick}>
        <div className="result-text" id="shortened-url">
          {this.props.shortenedUrl}
        </div>
        {!this.props.popoverHidden && (
          <Popover
            placement="bottom"
            isOpen={this.props.popoverOpen}
            target="shortened-url"
            toggle={this.toggle}
          >
            <PopoverBody>Copied</PopoverBody>
          </Popover>
        )}
      </div>
    );
  }
}

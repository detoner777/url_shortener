import React, { Component } from "react";
import { Button, Form, Input } from "reactstrap";
import "../App.css";

export class UrlForm extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  //передаем значение из формы в Home.js
  handleChange(e) {
    this.props.handleFormChange(e.target.value);
  }

  handleClick() {
    this.props.handleClick();
  }

  render() {
    return (
      <div className="form-container">
        <Form inline id="url-form">
          <Input
            id="url-input"
            type="text"
            name="url"
            placeholder="Paste a link to shorten it"
            value={this.props.userInput}
            onChange={e => this.handleChange(e)}
          />
          <Button
            id="inline-button"
            color="primary"
            value="POST URL"
            onClick={this.handleClick}
          >
            SHORTEN
          </Button>
        </Form>
      </div>
    );
  }
}

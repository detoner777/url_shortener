import React, { Component } from "react";

class PostUrl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      longUrl: "",
      shortUrl: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { longUrl } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            name="longUrl"
            value={longUrl}
            onChange={this.changeHandler}
          />
        </form>
        <button type="submit">Submit</button>
      </div>
    );
  }
}

export default PostUrl;

import React, { Component } from "react";
import axios from "axios";
import "./ContactForm.css";
export default class ContactForm extends Component {
  state = {
    fullName: "",
    email: "",
    employer: "",
    message: "",
    sent: false,
  };
  //handle inputs
  handleName = (e) => {
    this.setState({
      fullName: e.target.value,
    });
  };
  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handleEmployer = (e) => {
    this.setState({
      employer: e.target.value,
    });
  };
  handleMessage = (e) => {
    this.setState({
      message: e.target.value,
    });
  };
  //end of handling inputs
  //
  // reset initial data
  resetForm = () => {
    this.setState({
      fullName: "",
      email: "",
      employer: "",
      message: "",
    });
    setTimeout(() => {
      this.setState({
        sent: false,
      });
    }, 3000);
  };
  formSubmit = (e) => {
    e.preventDefault();
    let data = {
      fullName: this.state.fullName,
      email: this.state.email,
      employer: this.state.employer,
      message: this.state.message,
    };
    axios
      .post("/api/forma", data)
      .then(() => {
        this.setState(
          {
            sent: true,
          },
          this.resetForm(),
        );
      })
      .catch(() => {
        console.log("Message not sent.");
      });
  };
  render() {
    return (
      <div className="containerForm">
        <form onSubmit={this.formSubmit}>
          <div className="info">
            <label htmlFor="name">Your full name</label>
            <input
              type="text"
              name="name"
              className="name"
              placeholder="  name..."
              value={this.state.fullName}
              onChange={this.handleName}
            />
          </div>
          <div className="info">
            <label htmlFor="email">Your email</label>
            <input
              type="text"
              name="email"
              className="email"
              placeholder="  email..."
              value={this.state.email}
              onChange={this.handleEmail}
              required
            />
          </div>
          <div className="info">
            <label htmlFor="employerName">Employer name</label>
            <input
              type="text"
              name="employerName"
              className="employerName"
              placeholder="  Employer..."
              value={this.state.employer}
              onChange={this.handleEmployer}
            />
          </div>
          <div className="textArea info">
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="   Message..."
              value={this.state.message}
              onChange={this.handleMessage}
            ></textarea>
          </div>
          <div className={this.state.sent ? " msg msgAppear" : "msg"}>
            Message has been sent.
          </div>
          <div className="btn">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    );
  }
}

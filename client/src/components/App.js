import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./Header";
import * as actions from "../actions";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    const { profile } = this.props;
    return (
      <BrowserRouter>
        <div className="App">
          <Header profile={profile} />
          <p>Yoooo {profile ?profile.given_name: ""}</p>
        </div>
      </BrowserRouter>
    );
  }
}

const mstp = ({ auth:{profile} }) => ({ profile });

export default connect(
  mstp,
  actions
)(App);

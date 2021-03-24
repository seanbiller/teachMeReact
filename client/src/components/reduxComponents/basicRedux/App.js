import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "./actions";

class App extends React.Component {
  signInClick = () => {
    this.props.signIn();
  };
  signOutClick = () => {
    this.props.signOut();
  };
  render() {
    return (
      <>
        <h3>Press the Buttons Below To Sign In or Sign Out</h3>
        <button onClick={this.signInClick}>Sign In</button>
        <button onClick={this.signOutClick}>Sign Out</button>
        <h3>Are you signed in?: {this.props.isSignedIn}</h3>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return { isSignedIn: state.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(App);

export const AppJsCode = `
import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "./actions";

class App extends React.Component {
  signInClick = () => {
    this.props.signIn();
  };
  signOutClick = () => {
    this.props.signOut();
  };
  render() {
    return (
      <>
        <h3>Press the Buttons Below To Sign In or Sign Out</h3>
        <button onClick={this.signInClick}>Sign In</button>
        <button onClick={this.signOutClick}>Sign Out</button>
        <h3>Are you signed in?: {this.props.isSignedIn}</h3>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return { isSignedIn: state.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(App);
`.trim();

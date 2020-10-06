import React from "react";

const GoogleClientId =
  "165636457085-i74bodljq8cavhi2umcnv2s4jk82beb1.apps.googleusercontent.com";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: GoogleClientId,
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button
          onClick={this.onSignOutClick}
          className={"ui red google button"}
        >
          <i className={"google icon"}></i>Sign Out
        </button>
      );
    } else if (this.state.isSignedIn === false) {
      return (
        <button onClick={this.onSignInClick} className={"ui red google button"}>
          <i className={"google icon"}></i>Sign In with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;

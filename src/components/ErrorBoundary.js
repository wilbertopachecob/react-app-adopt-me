import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }
  //eslint-disable-next-line
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.error("ErrorBoundary caught error", error);
    setTimeout(() => this.setState({ redirect: true }), 5000);
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/"></Redirect>;
    } else if (this.state.hasError) {
      return (
        <h2>
          Something went wrong. <Link to="/">Click here</Link> to go back to
          homepage or wait five seconds.
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

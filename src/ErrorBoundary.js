import React, { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }
  //eslint-disable-next-line
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.error("ErrorBoundary caught error", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          Something went wrong. <Link to="/">Click here</Link> to go back to
          homepage.
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

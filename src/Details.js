import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";
import ENV from "./const/env";
import { STATES } from "./const/states";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";

class Details extends Component {
  state = { loading: STATES.LOADING };

  handleAPIErrors(error) {
    this.setState(() => {
      throw new Error(error.message);
    });
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    try {
      const res = await fetch(`${ENV.HOST}pets?id=${id}`);
      const json = await res.json();
      if (!json.pets.length) {
        const error = new Error("No record were found.");
        this.handleAPIErrors(error);
        return;
      }
      this.setState({
        loading: STATES.LOADED,
        ...json.pets[0],
      });
    } catch (error) {
      this.handleAPIErrors(error);
    }
  }

  render() {
    const { animal, name, breed, city, state, description, loading, images } =
      this.state;
    // throw new Error("No record were found.");
    if (loading === STATES.LOADING) {
      return <div className="loader"></div>;
    }

    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button style={{ backgroundColor: theme }}>Adopt {name}</button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

const DetailsWithRouter = withRouter(Details);

const DetailsWithErrorBoundary = (props) => {
  return (
    <ErrorBoundary>
      <DetailsWithRouter {...props} />
    </ErrorBoundary>
  );
};

export default DetailsWithErrorBoundary;

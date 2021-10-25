import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ENV from "./const/env";
import { STATES } from "./const/states";

class Details extends Component {
  constructor() {
    super();
    this.state = { loading: STATES.LOADING };
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    const res = await fetch(`${ENV.HOST}pets?id=${id}`);
    const json = await res.json();
    this.setState({
      loading: STATES.LOADED,
      ...json.pets[0],
    });
  }

  render() {
    const { animal, name, breed, city, state, description, loading } =
      this.state;
    if (loading === STATES.LOADING) {
      return <div className="loader"></div>;
    }

    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(Details);

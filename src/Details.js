import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";
import ENV from "./const/env";
import { STATES } from "./const/states";

class Details extends Component {
  state = { loading: STATES.LOADING };

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
    const { animal, name, breed, city, state, description, loading, images } =
      this.state;
    if (loading === STATES.LOADING) {
      return <div className="loader"></div>;
    }

    return (
      <div className="details">
        <Carousel images={images} />
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

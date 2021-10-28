import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";
import ENV from "../const/env";
import { STATES } from "../const/states";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "../contexts/ThemeContext";
import Modal from "./Modal";

class Details extends Component {
  state = { loading: STATES.LOADING, showModal: false };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  adopt = () => {
    window.location = "http://bit.ly/pet-adopt";
  };

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
    const {
      animal,
      name,
      breed,
      city,
      state,
      description,
      loading,
      images,
      showModal,
    } = this.state;
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
              <button
                onClick={this.toggleModal}
                style={{ backgroundColor: theme }}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h2>Would you like to adopt {name}?</h2>
                <div className="buttons">
                  <ThemeContext.Consumer>
                    {([theme]) => (
                      <div>
                        <button
                          style={{ backgroundColor: theme }}
                          onClick={this.adopt}
                        >
                          Yes
                        </button>
                        <button
                          style={{ backgroundColor: theme }}
                          onClick={this.toggleModal}
                        >
                          No
                        </button>
                      </div>
                    )}
                  </ThemeContext.Consumer>
                </div>
              </div>
            </Modal>
          ) : null}
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

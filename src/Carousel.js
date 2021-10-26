import { Component } from "react";
import { DEFAULT_IMAGE } from "./const/default-image";

class Carousel extends Component {
  state = {
    active: 0,
  };
  static defaultProps = {
    images: [DEFAULT_IMAGE],
  };

  changeActiveIMG(index) {
    this.setState({
      active: index,
    });
  }

  render() {
    const { active } = this.state;
    const { images } = this.props;
    return (
      <div className="carousel">
        <img src={images[active]} alt="animal thumbnail" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              onClick={() => this.changeActiveIMG(index)}
              src={photo}
              alt="animal thumbnail"
              key={photo}
              className={index === active ? "active" : ""}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;

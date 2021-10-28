import { Link } from "react-router-dom";
import { DEFAULT_IMAGE } from "../const/default-image";

const Pet = (props) => {
  const { name, animal, breed, images, location, id } = props;

  let src = DEFAULT_IMAGE;
  if (images.length) {
    src = images[0];
  }
  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={src} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;

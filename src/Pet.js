// import React from "react";

// const Pet = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h2", { key: 1 }, props.name),
//     React.createElement("h3", { key: 2 }, props.breed),
//     React.createElement("h3", { key: 3 }, props.specie),
//   ]);
// };

const Pet = (props) => {
  const { name, animal, breed, images, location, id } = props;

  let src = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    src = images[0];
  }
  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={src} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </a>
  );
};

export default Pet;

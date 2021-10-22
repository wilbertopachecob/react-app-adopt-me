import React from "react";

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", { key: 1 }, props.name),
    React.createElement("h3", { key: 2 }, props.breed),
    React.createElement("h3", { key: 3 }, props.specie),
  ]);
};

export default Pet;

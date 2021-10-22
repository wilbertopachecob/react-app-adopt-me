// import React from "react";

// const Pet = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h2", { key: 1 }, props.name),
//     React.createElement("h3", { key: 2 }, props.breed),
//     React.createElement("h3", { key: 3 }, props.specie),
//   ]);
// };

const Pet = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>{props.breed}</h3>
      <h3>{props.specie}</h3>
    </div>
  );
};

export default Pet;

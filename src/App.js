import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", { id: "my-brand" }, "Adopt me"),
    ...[1, 2, 3].map(() => React.createElement("h1", {}, "Adopt me")),
    [
      React.createElement(Pet, {
        name: "Shadow",
        specie: "cat",
        breed: "siamese",
      }),
      React.createElement(Pet, {
        name: "Santa",
        specie: "dog",
        breed: "boxed",
      }),
    ]
  );
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));

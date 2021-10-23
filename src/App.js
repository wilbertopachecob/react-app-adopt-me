// import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";

// const App = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", { id: "my-brand" }, "Adopt me"),
//     ...[1, 2, 3].map(() => React.createElement("h1", {}, "Adopt me")),
//     [
//       React.createElement(Pet, {
//         name: "Shadow",
//         specie: "cat",
//         breed: "siamese",
//       }),
//       React.createElement(Pet, {
//         name: "Santa",
//         specie: "dog",
//         breed: "boxed",
//       }),
//     ]
//   );
// };

const App = () => {
  return (
    <StrictMode>
      <div>
        <h1 id="my-brand">Adopt Me</h1>
        <SearchParams />
        {/* <Pet name="Shadow" specie="cat" breed="siamese" />
          <Pet name="Santa" specie="dog" breed="boxer" /> */}
      </div>
    </StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

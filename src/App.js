// import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";
import Details from "./Details";

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
        <Router>
          <header>
            <Link to="/">
              <h1 id="my-brand">Adopt Me</h1>
            </Link>
          </header>
          <Switch>
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route path="/">
              <SearchParams />
            </Route>
          </Switch>
        </Router>
      </div>
    </StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

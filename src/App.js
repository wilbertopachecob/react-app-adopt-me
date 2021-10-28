import { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import SearchParams from "./components/SearchParams";
import Details from "./components/Details";
import ThemeContext from "./contexts/ThemeContext";

const App = () => {
  const theme = useState("darkblue");

  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
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
      </ThemeContext.Provider>
    </StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", { key: 1 }, props.name),
    React.createElement("h3", { key: 2 }, props.breed),
    React.createElement("h3", { key: 3 }, props.specie),
  ]);
};
const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", { id: "my-brand" }, "Adopt me"),
    ...[1,2,3].map(() => React.createElement("h1", {}, "Adopt me")),
    [
      React.createElement(Pet, {name: 'Shadow', specie: 'cat', breed: 'siamese'}),
      React.createElement(Pet, {name: 'Santa', specie: 'dog', breed: 'boxed'})
    ],
  );
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));

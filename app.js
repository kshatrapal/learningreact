{
  /* <div id="parent">
    <div id="child">
        <h1>Hello h1</h1>
        <h1>Hello h2</h1>
    </div>
    <div id="child2">
        <h1>Hello h1</h1>
        <h1>Hello h2</h1>
    </div>
</div> */
}
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello h1"),
    React.createElement("h2", {}, "Hello h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello h1"),
    React.createElement("h2", {}, "Hello h2"),
  ]),
]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

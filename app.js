import React from "react";
import ReactDOM from "react-dom/client";


const heading = React.createElement("h1", { id: "heading" }, "Namaste 🚀");
//jsx = HTML like or XML like syntax
//jsx = (transpiled before it reaches the JS Engine)-Parcel-babel

//React Element
const Jsx = (
  <h1 className="head" tabIndex="1">
    Namaste React using 
  </h1>
);
const Title=()=> (
  <h1 className="head" tabIndex="1">
    Namaste React using Jsx
  </h1>
);

// React Fragment - behaves like an empty tag
const HeadingComponent = () => (
  <div id="container">
    {Title()}
    {Jsx}
    <h1 className="heading">Namaste React FunctionalComponent</h1>
  </div>
);

//console.log(JSXHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);

// const React = react;
// const ReactDOM = reactDOM;

// const hello = React.createElement("h1", {}, "Hello World");
// ReactDOM.render(hello, document.getElementById("root"))

import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return <h1>Hello World!</h1>;
};

ReactDOM.render(<App />, document.getElementById('root'));
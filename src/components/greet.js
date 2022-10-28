import React from "react";
import { Component } from "react";

// function Greet(props) {
//     return <h1>Hello {props.name}</h1>
// }

const Greet = (props) => {
  return (
    <div>
      <h1>Hello {props.name}, Welcome!!</h1>
      <p>
        A boy is {props.name} of Rajasthan is in 2nd year of B.Tech in Civil
        Engineering.
      </p>
    </div>
  );
};

class Quote extends Component {
  render() {
    return (
      <h3 id="quote">
        Let your light shine so brightly that others can see their way out of
        the dark.
      </h3>
    );
  };
};

export default Greet;
export { Quote };
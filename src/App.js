import React from "react";

function Food({ favourite }) {
  return <h3>I like {favourite}</h3>;
}

function App() {
  return (
    <div>
      <h1>Hello!!!</h1>
      <Food favourite="kimchi" />
      <Food favourite="ramen" />
      <Food favourite="samgiopsal" />
      <Food favourite="chukumi" />
    </div>
  );
}

export default App;

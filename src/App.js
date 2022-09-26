import React from "react";
import Countries from "./components/Countries";
import World from "./components/World";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <h1 className="text-center my-3">Worldwide Covid Information</h1>
      <World />
      <Countries />
    </div>
  );
}

export default App;

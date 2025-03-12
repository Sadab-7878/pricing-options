import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import PriceOptions from "./Components/PriceOptions/PriceOptions";
import Linechart from "./Components/Linechart/Linechart";
const App = () => {
  return (
    <>
      <Navbar />
      <PriceOptions />
      <Linechart />
    </>
  );
};

export default App;

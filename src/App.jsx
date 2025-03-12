import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import PriceOptions from "./Components/PriceOptions/PriceOptions";
import Linechart from "./Components/Linechart/Linechart";
import Products from "./Components/Products/Products";
const App = () => {
  return (
    <>
      <Navbar />
      <PriceOptions />
      <Linechart />
      <Products />
    </>
  );
};

export default App;

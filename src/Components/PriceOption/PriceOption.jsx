import PropTypes from "prop-types";
import React from "react";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <>
      <div className="bg-blue-500 rounded-md p-4 text-white flex flex-col ">
        <h2 className="text-center">
          <span className="text-7xl">{price}</span>
          <span className="text-2xl font-extrabold">/month</span>
        </h2>

        <h4 className="text-4xl text-center my-8">{name}</h4>

       <div className="pl-6 grow">
       {
          features.map((feature, index) => <Feature key={index} feature={feature}/>)
        }
       </div>

       <button className="mt-12 bg-green-600 w-full py-2 font-bold rounded-lg hover:bg-green-900 cursor-pointer">Buy Now</button>
      </div>
    </>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object.isRequired,
};
export default PriceOption;

import React from "react";
import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Plan",
      price: 29.99,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "1 personal training session per month",
      ],
    },
    {
      id: 2,
      name: "Standard Plan",
      price: 49.99,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "4 personal training sessions per month",
        "Access to group fitness classes",
      ],
    },
    {
      id: 3,
      name: "Premium Plan",
      price: 69.99,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Unlimited personal training sessions",
        "Access to group fitness classes",
        "Access to sauna and spa facilities",
        "Free gym merchandise",
      ],
    },
  ];
  return (
    <div className="m-12">
      <h2 className="text-5xl">Best Prices in the town</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option} />
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const Products = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phoneData = data.data.data;
        const phonesWithFakeData = phoneData.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };

          return obj;
        });

        setPhones(phonesWithFakeData);
      });
  }, []);

  return (
    <div>
      <h2 className="text-7xl">{phones.length}</h2>

      <BarChart width={1200} height={400} data={phones}>
        <Bar dataKey="price" fill="#82ca9d"/>

        <XAxis dataKey={`name`}/>
        <YAxis />
        <Tooltip />
      </BarChart>
    </div>
  );
};

export default Products;

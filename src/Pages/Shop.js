import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Mapbox from "../components/Mapbox";
import Properties from "../components/Propertie";

const Shop = () => {
  const property = useSelector((state) => state.propertyReducer.property);
  const cartItem = property.length;
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();

  const url = `${process.env.REACT_APP_PROPERTY_API}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, [url]);

  return (
    <div>
      <div className="flex items-center justify-between mx-8 pt-5 pb-10">
        <p
          onClick={() => navigate("/")}
          className="cursor-pointer text-2xl font-bold"
        >
          SHOP
        </p>
        <div 
        onClick={() => navigate("cart")} 
        className="relative">
          <p className="text-2xl font-bold cursor-pointer">
            Cart
            <p className="absolute -top-3 -right-3 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center text-base text-white">
              {cartItem}
            </p>
          </p>
        </div>
      </div>
      <h1 className="font-medium text-2xl mx-8 mb-4">Properties</h1>
      <div className="grid grid-cols-5  gap-4">
        <div className="col-span-3">
          <div className="grid grid-cols-3 custom-scroll overflow-y-scroll px-5 gap-x-5 gap-y-10 ">
            {properties.map((propertie, i) => (
              <Properties propertie={propertie} key={i} />
            ))}
          </div>
        </div>
        <div className="col-span-2 w-full">
          <Mapbox properties={properties} />
        </div>
      </div>
    </div>
  );
};

export default Shop;

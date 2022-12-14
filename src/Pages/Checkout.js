import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Checkout = () => {
  const navigate = useNavigate();
  const propertys = useSelector((state) => state.propertyReducer.property);
  let totalPrice = 0;
  propertys.map((property) => {
    const price = parseFloat(totalPrice) + parseFloat(property.asking_price);
    return (totalPrice = price.toLocaleString("en-IN"));
  });
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h1 className="text-center font-bold text-3xl py-4">
          Thank you for your purchase.
        </h1>
        <p className="text-base text-center">
          You have purchased {propertys.length} properties for ${totalPrice}
        </p>
        <div className="py-10 text-center">
          <Button to={"/"}>Go back to Store</Button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

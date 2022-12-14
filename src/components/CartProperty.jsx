import React from "react";
import { VscTrash } from "react-icons/vsc";
import { BiBed } from "react-icons/bi";
import { RiCarLine } from "react-icons/ri";
import { TbArrowAutofitContent, TbBath } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { deleteCartProperty } from "../redux/slice/propertyCartSlice";

const CartProperty = ({ property }) => {
  const { name, image, house_info, asking_price, address } = property;
  const { bed, bath, garage, sqft } = house_info;
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col lg:flex-row border border-[#6a6a6a] rounded-3xl">
      <div className="lg:w-4/12 w-full">
        <img
          className="rounded-3xl w-full lg:h-full h-60 object-cover"
          src={image}
        />
      </div>
      <div className="p-5 lg:w-8/12 w-full">
        <div className="flex items-center justify-between">
          <p className="font-medium text-3xl">${asking_price}</p>
          <span title="Delete from Cart"
            onClick={() => dispatch(deleteCartProperty(image))}
            className="flex text-3xl items-center text-red-500 cursor-pointer"
          >
            <VscTrash />
          </span>
        </div>
        <p className="font-medium text-lg my-2 w-10/12 leading-[1.3]">
          {name.length < 40 ? name : name.slice(0, 40) + "..."}
        </p>
        <p className="text-[#2e2e2e] text-sm">{address}</p>
        <div className="flex lg:gap-x-[20px] lg:pt-5">
          <span className="flex text-2xl items-center">
            <BiBed />
            <span className="text-xl ml-1"> {bed}</span>
          </span>
          <span className="flex text-2xl items-center">
            <TbBath />
            <span className="text-xl ml-1"> {bath}</span>
          </span>
          <span className="flex text-2xl items-center">
            <RiCarLine />
            <span className="text-xl ml-1"> {garage}</span>
          </span>
          <span className="flex text-2xl items-center">
            <TbArrowAutofitContent />
            <span className="text-xl ml-1"> {sqft}</span>{" "}
            <sup className="text-xs ml-1">sqft</sup>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartProperty;

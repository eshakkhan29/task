import React from "react";
import { BiBed } from "react-icons/bi";
import { RiCarLine } from "react-icons/ri";
import { TbArrowAutofitContent, TbBath } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { addCartProperty } from "../redux/slice/propertyCartSlice";

function Pop() {
  const popupData = useSelector((state) => state.popupReducer.popup);
  const { name, image, house_info, asking_price, address } = popupData[0];
  const { bed, bath, garage, sqft } = house_info;
  const dispatch = useDispatch();
  const price = asking_price.toLocaleString("en-IN");
  return (
    <div>
      <div className="rounded-xl relative">
        <img className="rounded-xl w-full object-cover h-52 lg:h-80" src={image} />
        <div className="absolute w-full h-full rounded-xl  top-0 left-0 bg-gradient-to-t from-[#040404ce] via-[#ffffff00] to-[#ffffff00]"></div>
        <div className="flex items-center justify-around px-3 w-full absolute bottom-5 left-2/4 -translate-x-2/4 gap-x-2 lg:gap-x-[20px] text-white">
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
      <div>
        <div className="flex justify-between items-center mt-3">
          <div>
            <span className="text-sm m-0">Asking Price</span>
            <p className="font-medium text-2xl">${price}</p>
          </div>
          <button
            onClick={() => dispatch(addCartProperty(popupData[0]))}
            className="outline-none text-white bg-gray-600 rounded-lg py-[4px] px-[35px]"
          >
            Buy
          </button>
        </div>
        <p className="font-medium text-lg my-2 w-9/12 leading-[1.3]">
          {name.length < 40 ? name : name.slice(0, 40) + "..."}
        </p>
        <h4 className="text-[#2e2e2e] text-base">{address}</h4>
      </div>
    </div>
  );
}

export default Pop;

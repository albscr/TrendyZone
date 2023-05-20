import React from "react";
import { ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/outline";

const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props;

  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}-${
    currentDate.getMonth() + 1
  }-${currentDate.getFullYear()}`;

  return (
    <div className="flex justify-between items-center mb-4 md:w-80 p-12 md:p-10 rounded-lg  h-10 my-4 bg-purple-300 shadow text-center border-b-4 border-black font-medium text-black transition-all ease-in hover:translate-y-1">
      <div className="flex flex-col items-center md:flex-row md:justify-between w-full">
        <p className="flex flex-col">
          <span className="font-light">Date: {formattedDate}</span>
          <span className="font-light">Articles: {totalProducts}</span>
        </p>
        <div className="flex gap-2 items-center">
          <span className="font-medium text-xl">${totalPrice}</span>
          <ChevronRightIcon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
};

export default OrdersCard;

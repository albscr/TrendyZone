import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const OrderCard = (props) => {
  const { id, title, imageURL, price, handleDelete } = props;
  let renderXMarkIcon;
  if (handleDelete) {
    renderXMarkIcon = (
      <XMarkIcon
        onClick={() => handleDelete(id)}
        className="md:h-6 md:w-6 w-5 h-5 text-black cursor-pointer hover:text-orange-300"
      />
    );
  }

  return (
    <div className="flex flex-col text-gray-600 px-1 py-2 rounded-lg md:flex-row justify-between items-center mb-4 ">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover border-b-2 border-orange-300"
            src={imageURL}
            alt={title}
          />
        </figure>
        <p className="w-40 text-base font-display font-light">{title}</p>
      </div>

      <div className="flex items-center py-1 gap-44 md:gap-2">
        <p className="text-lg font-medium">${price}</p>
        {renderXMarkIcon}
      </div>
    </div>
  );
};

export default OrderCard;

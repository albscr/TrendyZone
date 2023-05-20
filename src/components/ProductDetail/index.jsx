import React, { useContext } from "react";
import "./styles.css";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContext } from "../../Context";

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        context.detailOpen ? "flex" : "hidden"
      } product-detail px-6 md:px-0 h-screen md:h-fit flex-col fixed top-14 md:top-24 right-0 md:border border-gray-500 rounded-b-md bg-white md:mr-6 w-full md:w-96`}
    >
      <div className="flex justify-between items-center py-6 pr-4 md:pr-0 md:p-6">
        <h2 className="font-medium text-2xl font-corben">Details</h2>
        <div onClick={() => context.closeProductDetail()}>
          <XCircleIcon className="w-7 h-7 cursor-pointer hover:text-purple-300" />
        </div>
      </div>
      <figure className="md:px-6 flex justify-center">
        <img
          className="md:w-full md:h-full w-3/4 rounded-lg"
          src={context.productToShow.images}
          alt={context.productToShow.title}
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl">${context.productToShow.price}</span>
        <span className="font-medium text-xl">{context.productToShow.title}</span>
        <span>{context.productToShow.description}</span>
      </p>
      
    </aside>
  );
};

export default ProductDetail;

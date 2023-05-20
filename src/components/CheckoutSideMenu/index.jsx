import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../OrderCard";
import { totalPrice } from "../../utils";
import "./styles.css";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProduct = context.cartProducts.filter(
      (product) => product.id != id
    );
    context.setCartProducts(filteredProduct);
  };

  const handleCheckOut = () => {
    const orderToAdd = {
      date: "09/05/23",
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    };

    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
    context.setSearchByTitle(null);
  };
  const closeCheckoutSideMenu = () => {
    context.closeCheckoutSideMenu(false);
  };

  return (
    <aside
      className={`${
        context.isCheckoutSideOpen ? "flex" : "hidden"
      } checkout-side-menu flex-col fixed top-14 md:top-24 h-screen md:h-fit right-0 md:border  border-gray-400 rounded-b-lg  bg-white z-10 p-2 md:mr-4 w-full md:w-96`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium font-display text-xl">My Order</h2>
        <div onClick={() => context.closeCheckoutSideMenu()}>
          <XCircleIcon className="w-7 h-7 cursor-pointer hover:text-purple-300" />
        </div>
      </div>
      <div className="px-6 overflow-y-scroll flex-1">
        {context.cartProducts.map((product) => {
          return (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageURL={product.images}
              price={product.price}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>

      <div className="px-6 md:my-3 ">
        <p className="flex justify-between items-center">
          <span className="font-light font-display">Total:</span>
          <span className="font-medium text-2">
            ${totalPrice(context.cartProducts)}
          </span>
        </p>

        <Link to="/my-orders/last">
          <button
            onClick={() => {
              handleCheckOut();
              closeCheckoutSideMenu();
            }}
            className="w-full h-12 my-4 bg-purple-300 rounded-2xl text-center border-b-2 border-black font-medium text-black transition-all ease-in hover:translate-y-1 focus:translate-y-0 "
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;

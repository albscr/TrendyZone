import React, { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { CheckIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";

const Card = (data) => {
  const context = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToShow(productDetail);
  };

  const addProductstoCart = (event, productData) => {
    event.stopPropagation();
    context.setCount(context.count + 1);
    context.setCartProducts([...context.cartProducts, productData]);
    context.closeProductDetail();
    if (!isMobileDevice()) {
      context.openCheckoutSideMenu();
    }

  };
  
  const isMobileDevice = () => {
    return /Mobi|Android/i.test(navigator.userAgent);
  };

  //Logica para el cambio de Icono al agregar elementos al carrito
  const renderIcon = (id) => {
    const isInCart =
      context.cartProducts.filter((product) => product.id === id).length > 0;

    if (isInCart) {
      return (
        <div className="w-10 h-10 absolute top-2 right-6 flex justify-center items-center text-white bg-purple-300 rounded-full border border-white text-lg">
          <CheckIcon className="w-5 h-5" />
        </div>
      );
    } else {
      return (
        <div
          className="w-10 h-10 absolute top-2 right-6 flex justify-center items-center text-black bg-orange-300 rounded-full border border-white text-lg"
          onClick={(event) => addProductstoCart(event, data.data)}
        >
          <ShoppingCartIcon className="w-5 h-5" />
        </div>
      );
    }
  };

  return (
    <div
      className="bg-white cursor-pointer w-56 h-72"
      onClick={() => showProduct(data.data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
      {/* <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.data.category.name}</span> */}
        <img
          src={data.data.images}
          alt={data.data.title}
          className="w-full h-full object-cover rounded-lg"
        />
        {renderIcon(data.data.id)}
      </figure>
      <p className="flex flex-col justify-between items-center">
        <span>{data.data.title}</span>
        <span className="font-bold">${data.data.price}</span>
      
      </p>
    </div>
  );
};

export default Card;

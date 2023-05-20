import React, { useContext } from "react";
import Layout from "../../components/Layout";
import OrderCard from "../../components/OrderCard";
import { ShoppingCartContext } from "../../Context";
import { Link } from "react-router-dom";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);
  if (index === "last") index = context.order?.length - 1;

  return (
    <Layout>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex items-center mt-20 md:mt-0 relative justify-center text-4xl font-display text-gray-700">
          <h1>My Order</h1>
        </div>

        <div className="px-6 w-fit shadow grid md:gap-1 my-10 md:border rounded-lg p-6">
          {context.order?.[index]?.products.map((product) => {
            return (
              <OrderCard
                key={product.id}
                id={product.id}
                title={product.title}
                imageURL={product.images}
                price={product.price}
              />
            );
          })}
        </div>

        <Link
          to="/my-orders"
          className="flex items-center w-48 text-lg font-display mb-10 hover:underline "
        >
          <ArrowLeftCircleIcon className="w-6 h-6 cursor-pointer mr-3" /> All my
          orders
        </Link>
      </motion.section>
    </Layout>
  );
}

export default MyOrder;

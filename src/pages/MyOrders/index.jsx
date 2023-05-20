import React, { useContext } from "react";
import Layout from "../../components/Layout";
import OrdersCard from "../../components/OrdersCard";
import { ShoppingCartContext } from "../../Context";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

function MyOrders() {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex flex-col items-center"
      >
        <div className="flex items-center w-80 relative justify-center mt-20 md:mt-0">
          <h1 className="text-4xl font-display mb-12 text-gray-700">
            My Orders
          </h1>
        </div>

        {context.order.length > 0 ? (
          context.order.map((order, index) => (
            <Link key={index} to={`/my-orders/${index}`}>
              <OrdersCard
                totalPrice={order.totalPrice}
                totalProducts={order.totalProducts}
              />
            </Link>
          ))
        ) : (
          <Link to="/">
            <p className="flex items-center font-light px-4 w-full h-14 my-4 bg-orange-300 rounded-2xl text-center border-b-2 border-black text-black transition-all ease-in hover:translate-y-1">
              Let's make our first order
              <ArrowLongRightIcon className="w-6 h-6 pl-2" />
            </p>
          </Link>
        )}
      </motion.section>
    </Layout>
  );
}

export default MyOrders;

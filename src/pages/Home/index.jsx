import React, { useContext } from "react";
import Layout from "../../components/Layout";
import Card from "../../components/Card";
import ProductDetail from "../../components/ProductDetail";
import { ShoppingCartContext } from "../../Context";
import { useAuth } from "../../components/auth";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home({ title}) {
  const context = useContext(ShoppingCartContext);
  const isHomePage = window.location.pathname === "/";
  const auth = useAuth();

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return context.filteredItems?.map((item) => (
        <Card key={item.id} data={item} />
      ));
    } else {
      return <div>Article NOT found</div>;
    }
  };

  return (
    <Layout>
      <motion.div
      initial={{opacity: 0}}        
      animate={{opacity: 1, }}
      transition={{ duration: 1, delay: 1.5 }} 
      className="flex items-center w-80 relative justify-center md:mt-0">
        <h1 className="font-medium text-4xl font-corben mb-12 text-gray-700 md:pl-10 mt-20 md:mt-0">
          {title}
        </h1>
      </motion.div>

      {isHomePage && (
        <motion.div className="home-top flex justify-center"
        initial={{opacity: 0}}        
        animate={{opacity: 1, }}
        transition={{ duration: 1, delay: 2 }} >
          <div className="top flex flex-col justify-evenly h-2/4 w-11/12 mb-20 md:flex-row">
            <div className="img-container relative md:w-2/5">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <p className="text-3xl md:text-6xl md:tracking-wide md:w-72 md:leading-snug font-corben text-white mb-2">
                  Get up to 50% off
                </p>
                {auth.isLoggedIn ? (
                  <button className="md:w-7/12 w-11/12  h-12 my-4 text-base md:text-lg font-display bg-orange-300 rounded-2xl text-center border-b-4 border-white  text-black hover:translate-y-1 active:translate-y-1 transition-transform">
                    Shop Now
                  </button>
                ) : (
                  <button className="md:w-7/12 w-11/12 h-12 my-4 text-base md:text-lg ont-display bg-orange-300 rounded-2xl text-center border-b-4 border-white  text-white hover:translate-y-1 active:translate-y-1 transition-transform">
                    <Link to="/sign-in"> Sign in</Link>
                  </button>
                )}
              </div>
              <img
                className="object-cover h-full max-h-fit rounded-lg border-b-4 border-orange-300"
                src="https://images.unsplash.com/photo-1604668915999-03e1269f6af6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                alt="promp img"
              />
            </div>

            <img
              className="md:w-2/4 object-cover h-full rounded-lg mt-9 md:m-0 border-b-4 border-orange-300"
              src="https://images.unsplash.com/photo-1527275393322-8ddae8bd5de9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
              alt="promp img"
            />
          </div>
        </motion.div>
      )}
      <motion.div className="flex justify-center"
      initial={{opacity: 0}}        
      animate={{opacity: 1, }}
      transition={{ duration: 1, delay: 2 }} >
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  w-full max-w-screen-lg">
          {renderView()}
        </div>
      </motion.div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;

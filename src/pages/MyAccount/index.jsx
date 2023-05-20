import React from "react";
import Layout from "../../components/Layout";
import { useAuth } from "../../components/auth";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

function MyAccount() {
  const navigate = useNavigate();
  const auth = useAuth();

  const handleLogout = () => {
    auth.logout(null);
    navigate("/sign-in", {
      replace: true,
    });
  };
  return (
    <Layout>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex flex-col items-center"
      >
        <h1 className="w-screen md:w-fit text-4xl px-5 md:px-0 font-display mt-20 md:mt-0 mb-12 text-gray-700 md:pl-10 ">
          Hi!
          <span
            style={{
              display: "inline-block",
              maxWidth: "100%",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
            className="pl-3 underline underline-offset-4 font-display"
          >
            {auth.user.username}
          </span>
        </h1>

        <div className="top flex flex-col justify-evenly h-2/4 w-11/12 mb-10 md:mb-20 md:flex-row">
          <div className="img-container relative md:w-2/5">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <p className="text-3xl md:text-5xl font-corben text-white mb-2">
                Get up to 50% off
              </p>
              <button className="md:w-7/12 w-11/12  h-12 my-4 text-base md:text-lg font-display bg-orange-300 rounded-2xl text-center border-b-4 border-white  text-black hover:translate-y-1 focus:translate-y-0 active:translate-y-1 transition-transform">
                <Link to="/">Shop Now</Link>
              </button>
            </div>
            <img
              className="object-cover h-full max-h-fit rounded-lg border-b-4 border-orange-300"
              src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="promp img"
            />
          </div>

          <img
            className="md:w-2/4 object-cover h-full rounded-lg mt-9 md:m-0 border-b-4 border-orange-300"
            src="https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
            alt="propm img"
          />
        </div>

        <div className="bottom flex flex-col md:flex-row justify-between w-11/12 md:w-10/12 md:ml-10">
          <Link
            to={"/my-orders"}
            className="font-display text-xl flex items-center justify-around w-28 hover:underline "
          >
            My orders
            <ArrowLongRightIcon className="w-5 h-5" />
          </Link>
          <button
            className="btn-logout text-lg pointer mt-10 md:mt-0 w-full md:w-48 font-display h-14 my-4 bg-purple-300 rounded-2xl text-center border-b-4 border-black font-medium text-black hover:translate-y-1 active:translate-y-1 transition-transform"
            onClick={handleLogout}
          >
            Log out
          </button>
        </div>
      </motion.section>
    </Layout>
  );
}

export default MyAccount;

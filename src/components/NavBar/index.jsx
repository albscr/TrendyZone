import React, { useContext, useState } from "react";
import { ShoppingCartContext } from "../../Context";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useAuth } from "../auth";
import { motion } from "framer-motion";
import "./styles.css";

function Navbar() {
  const context = useContext(ShoppingCartContext);
  const auth = useAuth();

  //Hide placeholder
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="top-0 fixed z-10 hidden md:flex ">
      {/* TOP */}
      <nav className=" bg-white w-screen h-24 font-display flex justify-between items-center border-b border-solid border-gray-400">
        <p className="font-semibold text-4xl pl-6">
          <motion.NavLink
            to="/"
            className="flex items-center justify-start w-80 font-corben text-3xl text-gray-700"
            initial={{ y: "-100px" }}
            animate={{ x: "0", y: "0" }}
            transition={{ duration: 1 }}
          >
            TrendyZone
          </motion.NavLink>
        </p>

        <motion.div
          className="placeholder-container w-2/4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <span
            className={`placeholder-text text-gray-400 ${
              inputValue.length > 0 ? "hide" : ""
            }`}
          >
            <MagnifyingGlassIcon className="w-6 h-6 mr-2" />
            Search
          </span>
          <input
            type="text"
            className="rounded-3xl text-gray-600 w-full p-3 bg-slate-100 border-b-2 border-black/transparent pl-12 focus:outline-none focus:ring-2 focus:ring-purple-300"
            onInput={handleInputChange}
            onChange={(event) => context.setSearchByTitle(event.target.value)}
            value={inputValue}
          />
        </motion.div>

        <div className="user flex items-center pr-4">
          {auth.user?.username && (
            <div className="user flex items-center">
              <p className="pr-5 text-purple-300 text-semibold">
                Welcome!
                <span className=" text-gray-600"> {auth.user.username}</span>
              </p>
              <img
                className="w-11 h-11 rounded-3xl border-4 border-purple-300"
                src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2F0byUyMGNvbiUyMGxlbnRlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                alt="User photo"
              />
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

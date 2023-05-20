import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { useAuth } from "../auth";
import {
  Bars2Icon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const context = useContext(ShoppingCartContext);
  const auth = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    <section className="fixed  top-0 z-10 bg-white w-full h-14 md:hidden">
      <div className="md:hidden flex m-4 justify-between">
        <p className="font-semibold">
          <NavLink
            to="/"
            className="flex items-center justify-start w-full font-corben text-2xl text-gray-700"
            onClick={closeMenu}
          >
            TrendyZone
          </NavLink>
        </p>
        <button
          className="flex items-center"
          onClick={() => context.openCheckoutSideMenu()}
        >
          <ShoppingBagIcon className="w-5 h-5" />
          {context.cartProducts.length}
        </button>

        <motion.button
          className="text-black "
          onClick={toggleMenu}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {!isOpen ? (
            <Bars2Icon className="w-6 h-6" />
          ) : (
            <XMarkIcon className="w-6 h-6" />
          )}
        </motion.button>
      </div>

      <motion.div
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        className={
          isOpen ? "fixed z-10 overflow-y-scroll top-4 pt-4" : "hidden"
        }
      >
        <nav className=" bg-white h-screen w-screen text-lg mt-6 p-6 font-display">
          <ul className="flex flex-col ">
            <li className="">
              <NavLink
                to="/"
                onClick={() => {
                  context.setSearchByCategory("");
                  closeMenu();
                }}
                className="underline underline-offset-2"
              >
                All
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/clothes"
                onClick={() => {
                  context.setSearchByCategory("clothes");
                  closeMenu();
                }}
              >
                Clothes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/electronics"
                onClick={() => {
                  context.setSearchByCategory("electronics");
                  closeMenu();
                }}
              >
                Electronics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/furnitures"
                onClick={() => {
                  context.setSearchByCategory("furniture");
                  closeMenu();
                }}
              >
                Furnitures
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/toys"
                onClick={() => {
                  context.setSearchByCategory("toys");
                  closeMenu();
                }}
              >
                Toys
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/others"
                onClick={() => {
                  context.setSearchByCategory("others");
                  closeMenu();
                }}
              >
                Others
              </NavLink>
            </li>
            <li></li>

            {auth.isLoggedIn ? (
              <div className="private mt-16 ">
                <li className="mb-5">
                  <NavLink
                    to="/my-account"
                    onClick={closeMenu}
                    className="font-bold"
                  >
                    My account
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/my-orders" onClick={closeMenu}>
                    My orders
                  </NavLink>
                </li>
              </div>
            ) : (
              <div className="public">
                <li>
                  <NavLink
                    to="/sign-in"
                    onClick={closeMenu}
                    className="font-semibold"
                  >
                    Sign In
                  </NavLink>
                </li>
              </div>
            )}
          </ul>
        </nav>
      </motion.div>
    </section>
  );
}

export default MobileMenu;

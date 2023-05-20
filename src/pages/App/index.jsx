import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ShoppingCartProvider } from "../../Context";
import { AuthProvider } from "../../components/auth";
import Home from "../Home";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import MyAccount from "../MyAccount";
import SignIn from "../SignIn";
import NotFound from "../NotFound";
import Navbar from "../../components/NavBar";
import CheckoutSideMenu from "../../components/CheckoutSideMenu";
import NavbarSide from "../../components/NavbarSide";
import NavbarMobile from "../../components/NavbarMobile";
import "../../index.css";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home title={null}/>} />
    <Route path="/clothes" element={<Home title="Clothes"/>} />
    <Route path="/electronics" element={<Home title="Electronics" />} />
    <Route path="/furnitures" element={<Home title="Furniture" />} />
    <Route path="/toys" element={<Home title="Toys" />} />
    <Route path="/others" element={<Home title="Others" />} />
    <Route path="/my-account" element={<MyAccount />} />
    <Route path="/my-order" element={<MyOrder />} />
    <Route path="/my-orders/last" element={<MyOrder />} />
    <Route path="/my-orders/:id" element={<MyOrder />} />
    <Route path="/my-orders" element={<MyOrders />} />
    <Route path="/sign-in" element={<SignIn />} />
    <Route path="/*" element={<NotFound />} />
  </Routes>
);

function App() {
  return (
    <ShoppingCartProvider>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <NavbarSide />
          <NavbarMobile />
          <CheckoutSideMenu />
          <AppRoutes />
        </BrowserRouter>
      </AuthProvider>
    </ShoppingCartProvider>
  );
}

export default App;

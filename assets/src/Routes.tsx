import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Checkout from "./modules/checkout/Checkout";
import CheckoutConfirm from "./modules/checkout/CheckoutConfirm";
import Home from "./modules/signup/Home";
import Login from "./modules/signup/Login";
import NotFound from "./modules/notFound/NotFound";
import Signup from "./modules/signup/Signup";
import CategoryView from "./modules/category/CategoryView";
import ShoppingCart from "./modules/cart/ShoppingCart";
import PastPurchases from "./modules/pastPurchases/PastPurchases";
import BestSellers from "./modules/bestSellers/BestSellers";
import SearchView from "./modules/search/SearchView";

// interface RouteProps {
//   isAuthenticated?: boolean;
//   userHasAuthenticated?: (authenticated: boolean) => void;
// }

export const AppRoutes: React.FC = () =>
  <Routes>
    {/* <PropsRoute path="/" exact component={Home} props={childProps} />
    <PropsRoute path="/login" exact component={Login} props={childProps} />
    <PropsRoute path="/signup" exact component={Signup} props={childProps} /> */}

    <Route path="/" element={<Home/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />

    <Route path="/best" element={<><BestSellers/></>} />
    <Route path="/cart" element={<ShoppingCart/>} />
    <Route path="/category/:id" element={<CategoryView/>} />
    <Route path="/past" element={<PastPurchases/>} />
    <Route path="/checkout" element={<Checkout/>} />
    <Route path="/checkout-confirm" element={<CheckoutConfirm/>} />
    <Route path="/search/:id" element={<SearchView/>} />
    <Route element={NotFound} />
  </Routes>;
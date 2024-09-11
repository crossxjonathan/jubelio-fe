/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./page/landing page/landingpage";
import MainLayout from "./hoc/public/mainlayout";
import PrivateLayout from "./hoc/private/privatelayout";
import HomePage from "./page/homepage/homepage";
import Profile from "./page/profile/profile";
import AddProduct from "./page/product/add";
import UpdateProduct from "./page/product/update";
import SigninPage from "./page/auth/signin/signin";
import SellerRegister from "./page/auth/signup/signup";
import DetailProduct from "./page/product/detailproduct";
import CartPage from "./page/product/checkout";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route exact path={`/`} element={<LandingPage/>} />
          <Route exact path={`/auth/signin`} element={<SigninPage/>} />
          <Route exact path={`/auth/signup`} element={<SellerRegister/>} />
        </Route>
        <Route element={<PrivateLayout/>}>
          <Route exact path={`/dashboard/homepage`} element={<HomePage/>} />
          <Route exact path={`/dashboard/profile`} element={<Profile/>} />
          <Route exact path={`/dashboard/add-product`} element={<AddProduct/>} />
          <Route exact path={`/dashboard/update-product`} element={<UpdateProduct/>} />
          <Route exact path={`/dashboard/detail-product`} element={<DetailProduct/>} />
          <Route exact path={`/dashboard/checkout-product`} element={<CartPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoute;
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';
import PreviousOrders from '../pages/PreviousOrder';

const AppRoutes = () => {

  return (
    <>
    <Header />
    <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path='/products' element={<ProductsPage />}></Route>
        <Route path='/previous-orders' element={<PreviousOrders />}></Route>
    </Routes>
    <Footer />
    </>
  )
}

export default AppRoutes
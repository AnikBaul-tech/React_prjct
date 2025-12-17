import React from 'react';
import { Routes, Route } from "react-router-dom";

import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';

const AppRoutes = () => {

  return (
    
    <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path='/products' element={<ProductsPage />}></Route>
    </Routes>
  )
}

export default AppRoutes
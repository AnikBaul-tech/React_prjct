import React from 'react'
import { Routes, Route } from "react-router";
import HomePage from '../pages/HomePage';

const AppRoutes = () => {
  return (
    <Routes>
        <Route index element={<HomePage />}></Route>
    </Routes>
  )
}

export default AppRoutes
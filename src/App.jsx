import "./App.css"
import React from 'react'
import { ThemeProvider } from "./Context/ThemeContext"
import AppRoutes from "./Router/AppRoutes"

const App = () => {
  return (
    <>
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
    </>
  )
}

export default App
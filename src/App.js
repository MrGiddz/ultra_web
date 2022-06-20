import React from "react";
import { Footer, Navbar } from "./components";
import GlobalStyle from "./globalStyles";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/HomePage/Home";
import Services from "./pages/Services/Services";
import Products from "./pages/Products/Products";
import SignUp from "./pages/SignUp/SignUp";


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/services" exact element={<Services />} />
        <Route path="/products" exact element={<Products />} />
        <Route path="/sign-up" exact element={<SignUp />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

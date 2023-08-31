import { useState } from "react";
import Nav from "./Components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/auth/Login";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Menu from "./pages/Menu/Menu";
import Register from "./pages/auth/Register";
function App() {
  return (
    <>
      <div>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="*" element={<h1>Page not found</h1>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;

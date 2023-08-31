import { useState, useContext } from "react";
import Nav from "./Components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/auth/Login";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Menu from "./pages/Menu/Menu";
import Register from "./pages/auth/Register";
import Orders from "./pages/Orders/Orders";
import PrivateRoute from "./PrivateRoute";
import { UserContext } from "./context/UserContext";
import PushRoute from "./PushRoute";

function App() {
  const { authenticated } = useContext(UserContext);

  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<PushRoute isLoggedIn={!authenticated} />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route path="/menu" element={<Menu />} />
          <Route element={<PrivateRoute isLoggedIn={authenticated} />}>
            <Route path="/orders" element={<Orders />} />
          </Route>
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;

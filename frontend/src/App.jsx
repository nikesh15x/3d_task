import { useState } from "react";
import Nav from "./Components/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/auth/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<h1>Page not found</h1>} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;

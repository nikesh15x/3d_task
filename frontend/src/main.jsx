import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import UserProvider from "./context/UserContext.jsx";
import ScrollToTop from "./utils/scrollToTop.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <Router>
        <ScrollToTop />
        <App />
      </Router>
    </UserProvider>
  </React.StrictMode>
);

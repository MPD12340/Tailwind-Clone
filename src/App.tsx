import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div className="dark:bg-slate-900 min-h-screen overflow-hidden">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;

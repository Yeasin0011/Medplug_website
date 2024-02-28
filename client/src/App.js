 import {Routes, Route} from "react-router-dom";

import HomePage from "./pages/HomePage.js"
import About from "./pages/About";

import Contact from "./pages/Contact";

import Policy from "./pages/Policy";

import PageNotFound from "./pages/PageNotFound";

import Register from "./pages/Authentication/Register.js"

import Login from "./pages/Authentication/Login.js";

// import { ToastContainer } from "react-toastify"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/policy" element={<Policy />}/>
      <Route path="*" element={<PageNotFound />}/>
    </Routes>
    </>
  );
}

export default App;

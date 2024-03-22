 import {Routes, Route} from "react-router-dom";

import HomePage from "./pages/HomePage.js"

import About from "./pages/About";

import Contact from "./pages/Contact";

import Policy from "./pages/Policy";

import PageNotFound from "./pages/PageNotFound";

import Register from "./pages/Authentication/Register.js"

import Login from "./pages/Authentication/Login.js";

import Dashboard from "./pages/User/Dashboard.js";

import PrivateRoute from "./components/Routes/Private.js";

import ForgotPassword from "./pages/Authentication/ForgotPassword.js";

import AdminDashboard from "./pages/Admin/AdminDashboard.js";

import AdminRoute from "./components/Routes/AdminRoute.js";

import CreateCategory from "./pages/Admin/CreateCategory.js";

import CreateProduct from "./pages/Admin/CreateProduct.js";

import UsersView from "./pages/Admin/UsersView";

import Orders from "./pages/User/Orders.js";

import Profile from "./pages/User/Profile.js";

import Products from "./pages/Admin/Products.js";

import UpdateProduct from "./pages/Admin/UpdateProduct.js";

import Search from "./pages/Search.js";
import ProductDetails from "./pages/ProductDetails.js";
import Categories from "./pages/Categories.js";
import CategoryProduct from "./pages/CategoryProduct.js";






// import { ToastContainer } from "react-toastify"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/product/:slug" element={<ProductDetails />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/category/:slug" element={<CategoryProduct />} />
      <Route path="/search" element={<Search />} />
      <Route path="/dashboard" element={<PrivateRoute />}>
        <Route path="user" element = {<Dashboard/>} />
        <Route path="user/orders" element = {<Orders/>} />
        <Route path="user/profile" element = {<Profile/>} />
      </Route>
      <Route path="/dashboard" element = {<AdminRoute/>}>
        <Route path="admin" element = {<AdminDashboard/>}/>
        <Route path="admin/create-category" element = {<CreateCategory/>}/>
        <Route path="admin/create-product" element = {<CreateProduct/>}/>
        <Route path="admin/product/:slug" element = {<UpdateProduct/>}/>
        <Route path="admin/products" element = {<Products/>}/>
        <Route path="admin/users" element = {<UsersView/>}/>
      </Route>
      <Route path="/register" element={<Register/>}/>
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
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

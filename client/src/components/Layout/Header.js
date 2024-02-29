import React from "react";

import { NavLink, Link } from "react-router-dom";

import { GiMedicines } from "react-icons/gi";

import { useAuth } from "../../context/auth";

import toast from "react-hot-toast";

const Header = () => {
  const [auth, setAuth] = useAuth()
  const handleLogout = () => {
    setAuth({
      ...auth, user: null, token:''
    })
    localStorage.removeItem('auth')
    toast.success('Logout Successfully')
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand">
              <GiMedicines/>Medplug
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link ">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/category" className="nav-link ">
                  Category
                </NavLink>
              </li>
              {
                !auth.user ? (<>
                <li className="nav-item">
                <NavLink to="/register" className="nav-link">
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              </li>
                </>) : (<>
                <div className="nav-item dropdown">
                      <NavLink className="btn dropdown" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        {auth?.user?.name}
                      </NavLink>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><NavLink onClick={handleLogout} to="/login" className="nav-link">Logout</NavLink></li>
                        <li><NavLink to={`/dashboard/${auth?.user?.role === true?'admin':'user'}`} className="nav-link">Dashboard</NavLink></li>
                      </ul>
                  </div>
                </>)
              }
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link">
                  Cart (0)
                </NavLink>
              </li> 
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
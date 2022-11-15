import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle.js'
// import '../style/Navbar.css'

import { Routes, Route, Link } from "react-router-dom";
function Navbar() {
   return (
      <div>
         <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
               <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
               >
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav ms-auto">
                     <li className="nav-item navbar-style">
                        <Link
                           to={"/"}
                           className="nav-link active link-list"
                           aria-current="page"
                        >
                           Home
                        </Link>
                     </li>
                     <li className="nav-item navbar-style">
                        <Link to={"/event"} className="nav-link link-list">
                           Event
                        </Link>
                     </li>
                     <li className="nav-item navbar-style" id="addEvent">
                        <Link to={"/addevent"} className="nav-link link-list">
                           Add Event
                        </Link>
                     </li>
                     <li className="nav-item navbar-style">
                        <Link to={"/aboutus"} className="nav-link link-list">
                           About Us
                        </Link>
                     </li>
                     <li className="nav-item dropdown">
                        <a
                           className="nav-link dropdown-toggle"
                           id="navbarDropdownMenuLink"
                           role="button"
                           data-bs-toggle="dropdown"
                           aria-expanded="false"
                        >
                           <img
                              src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                              width="40"
                              height="40"
                              className="rounded-circle"
                           />
                        </a>
                        <ul
                           className="dropdown-menu"
                           aria-labelledby="navbarDropdownMenuLink"
                        >
                           <li id="login">
                              <Link to={"/login"} className="dropdown-item">
                                 Login / Register
                              </Link>
                           </li>
                           <li id="dash">
                              <a className="dropdown-item">Dashboard</a>
                           </li>
                           <li id="edit">
                              <a className="dropdown-item">Edit Profil</a>
                           </li>
                           <li id="log">
                              <a
                                 className="dropdown-item"
                                 //  href="#"
                                 //  onClick={signOut()}
                              >
                                 Log Out
                              </a>
                           </li>
                        </ul>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </div>
   );
}

export default Navbar;

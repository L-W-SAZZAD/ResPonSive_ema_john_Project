import React from "react";
import { Link, NavLink } from "react-router-dom";
import icon from "../../../images/Logo.svg";
import { FaMinus, FaStream } from "react-icons/fa";
import "./Navbar.modules.css";
let activeStyle = { color: "#FF9900" };
// navbar mobile device

const block = () => {
  const menuBar = document.getElementById("menuBar");
  menuBar.style.top = "0px";
};

const minus = () => {
  const menuBar = document.getElementById("menuBar");
  menuBar.style.top = "-1000px";
};

const Navbar = () => {
  return (
    <div className="header_wrapper bg-[#1C2B35]  w-full fixed top-0 right-0 z-40">
      <div className="navbar bg-[#1C2B35] lg:flex lg:justify-between lg:items-center lg:max-w-[1320px] lg:mx-auto lg:py-3 lg:px-5  md:w-full md:flex md:justify-between md:items-center relative md:px-5 md:py-3 sm:flex sm:justify-between sm:items-center sm:py-3 sm:px-5 w-full justify-between items-center py-3 px-5 flex z-50">
        <div className="nav_icons">
          <Link to={"/"}>
            <img src={icon} alt="" />
          </Link>
        </div>
        <nav>
          <ul
            id="menuBar"
            className="lg:flex lg:items-center text-white items-center lg:static md:absolute md:w-full bg-[#1C2B35] top-[-1000px] left-0 md:text-center duration-500 sm:absolute sm:w-full sm:text-center absolute text-center w-full "
          >
            <li className="lg:pr-8 lg:mt-0 md:mt-5 sm:mt-5 mt-5 lg:mb-0 md:mb-3 sm:mb-3 mb-3">
              <NavLink
                to={"/oder"}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Oder
              </NavLink>
            </li>
            <li className="lg:pr-8 lg:mb-0 md:mb-3 sm:mb-3 mb-3">
              <NavLink
                to={"/oderReview"}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Order Review
              </NavLink>
            </li>
            <li className="lg:pr-8 lg:mb-0 md:mb-3 sm:mb-3 mb-3">
              <NavLink
                to={"/manageInventory"}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Manage Inventory
              </NavLink>
            </li>
            <li className="lg:mb-0 md:mb-5 sm:mb-5 mb-5">
              <NavLink
                to={"/login"}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Login
              </NavLink>
            </li>
            <li
              onClick={minus}
              className="text-2xl text-black duration-500 cursor-pointer p-2 bg-[#fff] hover:bg-[#FF9900] rounded-md lg:hidden absolute top-0 right-0 mr-3 mt-5"
            >
              <FaMinus />
            </li>
          </ul>
        </nav>
        <div onClick={block} className="mobile_divice_icons lg:hidden">
          <FaStream className="text-white text-2xl " />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

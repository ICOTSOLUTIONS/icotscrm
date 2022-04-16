import React from "react";
import {  MdManageAccounts,MdOutlineDashboard,MdLogout } from "react-icons/md";

import { Link, useLocation } from "react-router-dom";
import lOGO from '../img/icot.png'
export default function AdminHeader() {

  const location = useLocation()
  const { pathname } = location

  let removeClass = () => {
    console.log("running");

    var x = document.getElementsByTagName("BODY")[0].classList;

    if (x.contains("sidebar-gone")) {
      x.remove("sidebar-gone");
      x.add("sidebar-show");
    } else {
      if (x.contains("sidebar-mini")) {
        x.remove("sidebar-mini");
      } else {
        x.add("sidebar-mini");
      }
    }
  };

  const settings = () => {
    console.log("1111")
    document.getElementById("settings").classList.add("showSettingPanel")
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg main-navbar sticky">
        <div className="form-inline mr-auto">
          <ul class="navbar-nav mr-3">
            <li>
              <a href="#" class="nav-link nav-link-lg collapse-btn">
                {" "}
                <i
                  onClick={() => removeClass()}
                  className="fa fa-bars d-lg-none d-xl-none"
                  style={{ color: "" }}
                ></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="main-sidebar sidebar-style-2">
        <side id="sidebar-wrapper">
          <div className="sidebar-brand">
            <Link to="/Dashboard">
              {" "}
              <span className="logo-name">ICOTS SOLUTION</span>
            </Link>
          </div>
          <div className="sidebar-user">
            <div className="sidebar-user-picture">
              <img alt="image" src={lOGO} />
            </div>
          </div>
          <ul className="sidebar-menu">
            <li className={pathname == "/Employes" ? "active" : ""}>
              <Link to="/Employes" className=" nav-link ">
                <i><MdManageAccounts /></i>
                <span>Employes</span>
              </Link>
            </li>
            <li className={pathname == "/Attendance" ? "active" : ""}>
              <Link to="/Attendance" className=" nav-link ">
                <i><MdOutlineDashboard /></i>
                <span>Attendance</span>
              </Link>
            </li>
            <li>
              <Link to="/" className=" nav-link ">
                <i><MdLogout /></i>
                <span>Logout</span>
              </Link>
            </li>
          </ul>
        </side>
      </div>
    </div>
  );
}

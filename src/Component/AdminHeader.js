import React, { useState } from "react";
import { MdManageAccounts, MdOutlineDashboard, MdLogout } from "react-icons/md";
import $ from "jquery";
import { Link, useLocation } from "react-router-dom";
import lOGO from '../img/icot.png';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import CloseIcon from '@mui/icons-material/Close';
export default function AdminHeader() {

  const location = useLocation()
  const { pathname } = location

  const Setting = (value) => {
    if (value == "light") {
      $("body").removeClass("dark-sidebar");
      $("body").addClass("light-sidebar");
      $("body").removeClass();
      $("body").addClass("light");
      $("body").addClass("light-sidebar");
      $("body").addClass("theme-white");
      $(".choose-theme li").removeClass("active");
      $(".choose-theme li[title|='white']").addClass("active");
      $(".selectgroup-input[value|='1']").prop("checked", true);
      $('.MuiPaper-root').removeClass('table-dark')
      $('.MTableHeader-header-13').removeClass('table-dark')
    } else {
      console.log('th -> ', $('table thead tr th'))
      $('.MuiPaper-root').addClass('table-dark')
      $('.MTableHeader-header-13').addClass('table-dark')
      $("body").removeClass("light-sidebar");
      $("body").addClass("dark-sidebar");
      $("body").removeClass();
      $("body").addClass("dark");
      $("body").addClass("dark-sidebar");
      $("body").addClass("theme-black");
      $(".choose-theme li").removeClass("active");
      $(".choose-theme li[title|='black']").addClass("active");
      $(".selectgroup-input[value|='2']").prop("checked", true);
    }
  }
  const sidebar = (value) => {
    if (value == "lightsidebar") {
      $("body").removeClass("dark-sidebar");
      $("body").addClass("light-sidebar");
    } else {
      $("body").addClass("dark-sidebar");
      $("body").removeClass("light-sidebar");
    }
  }

  let removeClass = () => {
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
  const [date, setdate] = useState("")
  const [Day, setDay] = useState("")
  const [Time, setTime] = useState("")
  const settings = () => {
    document.getElementById("sidebar").classList.add("showSettingPanel")
    var currentdate = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var day = weekday[currentdate.getDay()];
    console.log(day)
    setDay(day)
    var datetime = "" + currentdate.getDate() + "/"
      + (currentdate.getMonth() + 1) + "/"
      + currentdate.getFullYear() + ""
    console.log(datetime)
    setdate(datetime)
    var dt = new Date();
    var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    console.log(time)
    setTime(time)
  }
  const close = () => {
    document.getElementById("sidebar").classList.remove("showSettingPanel")
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg main-navbar sticky">
        <div className="row">
          <div className="col-md-1">
            <a href="#" class="nav-link nav-link-lg collapse-btn">
              <i
                onClick={() => removeClass()}
                className="fa fa-bars  d-lg-none d-xl-none"
                style={{ color: "" }}
              ></i>
            </a>
          </div>
          <div className="col-md-11">
            <a href="#" class="nav-link nav-link-lg collapse-btn float-right">
              {" "}
              <i
                onClick={() => settings()}
                className="fa fa-bars"
                style={{ color: "" }}
              ></i>
            </a>
          </div>
        </div>
      </nav>
      <div className="main-sidebar sidebar-style-2">
        <side id="sidebar-wrapper">
          <div className="sidebar-brand">
            <Link to="/Admin/Dashboard">
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
            <li className={pathname == "/Admin/Employes" ? "active" : ""}>
              <Link to="/Admin/Employes" className=" nav-link ">
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
      <div id="sidebar" className="settingSidebar" >
        <div className="settingSidebar-body ps-container ps-theme-default">
          <div className="d-flex justify-content-end">
            <CloseIcon onClick={() => close()} className="closeicon mt-2 mr-2" />
          </div>
          <div className="row date ml-2">
            <h4 className="today mt-4 col-md-5">{Day}</h4>
            <h4 className="col-md-5 today mt-4 ">{date}</h4>
          </div>
          <br />
          <div className="row date">
            <div className="col-md-12">
              <h6 className="time ml-2">Time</h6>
              <p className="total ml-2">{Time}</p>
            </div>
          </div>
          <br />
          <div className="row date">
            <div className="col-md-12">
              <h6 className="time ml-2">Work Time</h6>
              <p className="ml-2 total">0002</p>
            </div>
          </div>
          <br />
          <div className="row date">
            <div className="col-md-12">
              <h6 className="time ml-2">Expected Time</h6>
              <p className="ml-2 total">0002</p>
            </div>
          </div>
          <br />
          <div className="row date">
            <div className="col-md-12">
              <p className="time ml-2">Quick Actions</p>
              <div className="row d-flex justify-content-center">
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                  <Button variant="contained" className="mr-2" startIcon={<AccessTimeIcon />}>Time In</Button>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                  <Button variant="contained" startIcon={<AccessTimeIcon />}>Time Out</Button>
                </Box>

              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}

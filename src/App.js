import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Login from '../src/Auth/Login'
import AdminLogin from '../src/Auth/Admin'
import Dashboard from '../src/Admin/Dashboard'
import Employes from './Admin/Emplooyes';
export default function App() {

  return <div>
      <Router>
        <Routes>
          {/* EMPLOYES ROUTES */}
          <Route exact path="/" element={<Login />}></Route>

          {/* EMPLOYES ROUTES */}

          {/* ADMIN ROUTES */}
          <Route exact path="/AdminLogin" element={<AdminLogin />}></Route>
          <Route exact path="/Admin/Dashboard" element={<Dashboard />}></Route>
          <Route exact path="/Admin/Employes" element={<Employes />}></Route>

          {/* ADMIN ROUTES */}

        </Routes>
      </Router>
  </div>;
}

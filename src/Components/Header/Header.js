import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { checkUser } from "../Auth/AuthService";

// Import the CSS file
import '../../Style/Home.css'; 

const Header = (props) => {
  const navigate = useNavigate();
  const goBackHandler = () => {
    navigate("/auth");
  };

  if (checkUser()) {
    return (
      <div>
        <h1 id="title">FitSnap</h1>

        {/* List of references to navigate between website pages */}
        <ul id="list">
          <li><Link to="/">Home Page</Link></li>
          <li><Link to="/overview">Overview</Link></li>
          <li><Link to="/tracking">Enter Your Daily Meals and Activity</Link></li>
          <li><Link to="/goals">Goals</Link></li>
          <li><Link to="/premium">Get a Premium Subscription</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <h1 id="title">FitSnap</h1>
      </div>
    );
  }
};

export default Header;
/*
/* Header for all pages 
const Header = () => {
  
  return (
    <div>
        <h1 id="title">FitSnap</h1>

        {/* List of references to navigate between website pages }
        <ul id="list">
          <li><Link to="/">Home Page</Link></li>
          <li><Link to="/overview">Overview</Link></li>
          <li><Link to="/tracking">Enter Your Daily Meals and Activity</Link></li>
          <li><Link to="/goals">Goals</Link></li>
          <li><Link to="/premium">Get a Premium Subscription</Link></li>
          <li><Link to="/auth">Log-in/Register</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
    </div>
  );
};

export default Header;
*/
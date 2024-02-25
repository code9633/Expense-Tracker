import React from "react";
import "./Main.css";
import { Link, Outlet } from "react-router-dom";
import { GrMoney } from "react-icons/gr";

function Main() {
  return (
    <div className="container">
      <div className="headerContent">
        <Link to="/">
          <div className="brand">  
            <GrMoney className="headerIcon" />
            <h2>HomeBudget</h2>  
          </div>
        </Link>
      </div>

      {/* bodycontent */}
      <Outlet />

      <div className="footerContent"></div>
    </div>
  );
}

export default Main;

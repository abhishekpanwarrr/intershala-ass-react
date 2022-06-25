import React from "react";
import logo from "../../assets/logo.svg";
import "./Sidebar.css";
import { sidebarData } from "../../assets/data";
import SidebarItem from "../sidebar-items/SidebarItem";
import profile from "../../assets/profile.png";
const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebarUpper">
        <div className="logoWrapper">
          <img src={logo} className="logo" alt="BrandLogo" />
        </div>
        <h3>School Space</h3>
      </div>
      <div className="sidebarMiddle">
        {sidebarData.map((item) => (
          <SidebarItem key={item.id} data={item} />
        ))}
      </div>
      <div className="sidebarBottom">
        <img src={profile} alt="Profile" className="profile" />
        <h3>Andy Sambeg</h3>
        <p>andy.samberg@gmail.com</p>
        <button>VIEW PROFILE</button>
      </div>
    </aside>
  );
};

export default Sidebar;

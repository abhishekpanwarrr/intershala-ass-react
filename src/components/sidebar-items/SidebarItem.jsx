import React from "react";
import "./SidebarItem.css";
const SidebarItem = ({ data }) => {
  return (
    <div className="sidebarItem">
      <img src={data.icon} alt={data.title} />
      <p>{data.title}</p>
    </div>
  );
};

export default SidebarItem;

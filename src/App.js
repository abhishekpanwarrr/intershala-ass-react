import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import MainBody from "./components/mainBody/MainBody";
import UserContextProvider from "./context/app";

const App = () => {
  return (
    <UserContextProvider>
      <div className="wrapper">
        <Sidebar />
        <MainBody />
      </div>
    </UserContextProvider>
  );
};

export default App;

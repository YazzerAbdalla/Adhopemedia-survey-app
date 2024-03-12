"use client";
import React, { useState } from "react";
import Home from "./(components)/Pages/Home";
import Nav from "./(components)/Nav";

import Activity from "./(components)/Pages/Activity";
import Terms from "./(components)/Pages/Terms";
const Main = () => {
  const [navTabs, setNavTabs] = useState("home");
  return (
    <>
      <Nav navTabs={navTabs} setNavTabs={setNavTabs} />
      <div className="mt-20">
        {navTabs === "home" ? (
          <Home />
        ) : navTabs === "activity" ? (
          <Activity id={"1000"} userID="ker" />
        ) : (
          <Terms />
        )}
      </div>
    </>
  );
};

export default Main;

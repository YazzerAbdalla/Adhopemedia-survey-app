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
      {navTabs === "home" ? (
        <Home />
      ) : navTabs === "activity" ? (
        <Activity id={"1000"} userID="ker" />
      ) : (
        <Terms />
      )}
    </>
  );
};

export default Main;

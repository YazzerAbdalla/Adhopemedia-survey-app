"use client";
import Nav from "@/app/(components)/Nav";
import Activity from "@/app/(components)/Pages/Activity";
import Home from "@/app/(components)/Pages/Home";
import Terms from "@/app/(components)/Pages/Terms";
import React, { useState } from "react";

const Main = ({ params }: { params: { id: string; userID: string } }) => {
  const [navTabs, setNavTabs] = useState("home");
  return (
    <>
      <Nav navTabs={navTabs} setNavTabs={setNavTabs} />
      <div className="mt-20">
        {navTabs === "home" ? (
          <Home id={params.id} userID={params.userID} />
        ) : navTabs === "activity" ? (
          <Activity
            id={params.id}
            userID={params.userID}
            setNavTabs={setNavTabs}
          />
        ) : (
          <Terms />
        )}
      </div>
    </>
  );
};

export default Main;

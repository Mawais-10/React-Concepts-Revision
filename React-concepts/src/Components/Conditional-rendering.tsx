import Buttons from "./Buttons";
import Profile from "./Profile";
import React from "react";

let isLoggedIn;

export const Conditionalrendering = () => {
  return <div>{isLoggedIn ? <Buttons /> : <Profile />}</div>;
};

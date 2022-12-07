import React from "react";
import { Quote } from "./components/Quote";

export function App() {
  return (
    <div className="body d-flex flex-column justify-content-center align-items-center">
      <div id="wrapper">
        <Quote />
      </div>
      <div className="footer m-2">
        <span className="text-white">by </span>
        <a className="text-white" href="">
          Latyipov
        </a>
      </div>
    </div>
  );
}

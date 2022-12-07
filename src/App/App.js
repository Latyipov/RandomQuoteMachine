import React, { useState } from "react";
import { Quote } from "./components/Quote";

export function App() {
  const [bodyBackground, setBodyBackground] = useState(null);
  return (
    <div
      className="body d-flex flex-column justify-content-center align-items-center"
      style={bodyBackground}
    >
      <div id="wrapper">
        <Quote bodyBackground={setBodyBackground} />
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

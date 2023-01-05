import React, { useState, createContext, useRef } from "react";
import { Quote } from "./components/Quote";
import { getRandomColor } from "./services/getRandomColor";

export const colorContext = createContext();

export function App() {
  const [color, setColor] = useState(getRandomColor());
  const refreshColor = () => setColor(getRandomColor());

  console.log(color);
  return (
    <colorContext.Provider value={{ color, refreshColor }}>
      <div
        className="body d-flex flex-column justify-content-center align-items-center"
        style={{ backgroundColor: color }}
      >
        <div id="wrapper">
          <Quote />
        </div>
        <div className="footer m-2">
          <span className="text-white">by Latyipov</span>
        </div>
      </div>
    </colorContext.Provider>
  );
}

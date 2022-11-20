import React, { useState, useEffect } from "react";

const UseEffect2 = () => {
  const [widthCount, setWidthCount] = useState(window.screen.width);
  const actualWidth = () => {
    console.log(window.innerWidth);
    setWidthCount(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", actualWidth);
    return () => {
      window.removeEventListener("resize", actualWidth);
    };
  });

  return (
    <>
      <p> The actual size of the window is:</p>
      <h1>{widthCount}</h1>
    </>
  );
};

export default UseEffect2;

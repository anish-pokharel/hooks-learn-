import React, { useEffect, useState } from "react";
import useTitleCount from "./useTitleCount";

const Test1 = () => {
  const [count, setCount] = useState(0);
  useTitleCount(count);

  console.log("hello anish pokharel");

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>click me </button>
    </>
  );
};

export default Test1;

import React, { useEffect, useState } from "react";

const UseEffect1 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Chats(${count})`;
  });
  console.log("hello anish pokharel");

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>click me </button>
    </>
  );
};

export default UseEffect1;

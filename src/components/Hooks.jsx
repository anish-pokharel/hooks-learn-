import React, { useState } from "react";

const Hooks = () => {
  const [myName, setmyName] = useState("anish pokharel");
  return (
    <>
      <h1>{myName}</h1>
    </>
  );
};

export default Hooks;

import React, { useState } from "react";

const ShortCircuit = () => {
  const [demo, setDemo] = useState("");

  return (
    <>
      <h1>
        {demo || (
          <>
            <h1>mast</h1>
            <p>to can do anything</p>
          </>
        )}
      </h1>
      <h1>{demo && "anish"} </h1>
    </>
  );
};

export default ShortCircuit;

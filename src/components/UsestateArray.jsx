import React, { useState } from "react";

const UsestateArray = () => {
  const bioData = [
    {
      id: 0,
      myNAme: "anish",
      age: 24,
    },
    {
      id: 1,
      myNAme: "aashish",
      age: 27,
    },
  ];
  const [myArray, setmyArray] = useState(bioData);
  const clearArray = () => {
    setmyArray([]);
  };
  return (
    <>
      {myArray.map((curElm) => (
        <h1 key={curElm.id}>
          Name:{curElm.myNAme} & Age:{curElm.age}
        </h1>
      ))}
      <button onClick={clearArray}>clear </button>
    </>
  );
};

export default UsestateArray;

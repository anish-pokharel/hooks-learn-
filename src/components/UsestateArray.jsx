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
  const removeElem = (id) => {
    const myNewArray = myArray.filter((curElem) => {
      return curElem.id != id;
    });
    setmyArray(myNewArray);
  };
  return (
    <>
      {myArray.map((curElm) => {
        return (
          <h1 key={curElm.id}>
            Name:{curElm.myNAme} & Age:{curElm.age}
            <button onClick={() => removeElem(curElm.id)}>remove</button>
          </h1>
        );
      })}
      <button onClick={clearArray}>clear </button>
    </>
  );
};

export default UsestateArray;

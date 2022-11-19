import React, { useState } from "react";

const UseStateObject = () => {
  const [myObject, setmyObject] = useState({
    myName: "Anish Pokharel",
    myAge: 24,
    myDegree: "BE SE",
  });

  const changeObject = () => {
    setmyObject({ ...myObject, myName: "aashish pokarel" });
  };

  return (
    <>
      <h1>
        Name:{myObject.myName} &Age :{myObject.myAge} &Degree:
        {myObject.myDegree}
      </h1>
      <button onClick={changeObject}>Update</button>
    </>
  );
};

export default UseStateObject;

import React, { useRef, useState } from "react";

const Uncontrolled = () => {
  const luckyName = useRef(null);
  const [show, setShow] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    const name = luckyName.current.value;
    name === "" ? alert("plz enter the data") : setShow(true);
  };

  return (
    <>
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="luckyName">Enter your Lucky Name </label>
          <input type="text" id="luckyName" ref={luckyName} />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
      <p>{show ? `${luckyName.current.value}` : ""}</p>
    </>
  );
};

export default Uncontrolled;

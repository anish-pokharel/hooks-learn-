import React from "react";
import ContextC from "./ContextC";

const ContextB = ({ name }) => {
  return (
    <>
      <ContextC name={name} />
    </>
  );
};

export default ContextB;

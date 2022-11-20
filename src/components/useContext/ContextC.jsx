import React, { useContext } from "react";
import { Biodata } from "./ContextA";

const ContextC = ({ name }) => {
  const namekho = useContext(Biodata);
  return (
    <>
      <h1>{namekho} pokharel</h1>
    </>
  );
};

export default ContextC;

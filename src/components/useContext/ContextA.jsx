import React, { createContext } from "react";
import ContextB from "./ContextB";

const Biodata = createContext();

const ContextA = () => {
  return (
    <>
      <Biodata.Provider value={"anish"}>
        <ContextB />
      </Biodata.Provider>
    </>
  );
};

export default ContextA;
export { Biodata };

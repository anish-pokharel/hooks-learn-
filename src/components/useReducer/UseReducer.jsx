import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  if (action.type === "Increment") {
    return state + 1;
  }
  if (action.type === "Decrement") {
    return state - 1;
  }
  return state;
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //   const [state, dispatch] = useReducer(first, second, third)

  return (
    <>
      <div>
        <p>{state}</p>
        <div>
          <button onClick={() => dispatch({ type: "Increment" })}>Incr</button>
          <button onClick={() => dispatch({ type: "Decrement" })}>Dec</button>
        </div>
      </div>
    </>
  );
};

export default UseReducer;

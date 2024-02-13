import React, { useContext } from "react";
import { GlobalInfo } from "./App";

export default function SuperChild() {
  const { bg_Color, getAmount } = useContext(GlobalInfo);
  const Amount = 1000;
  return (
    <div>
      <h1 style={{ background: bg_Color }}>Superchild Component</h1>
      <button
        onClick={() => {
          getAmount(Amount);
        }}
      >
        Click
      </button>
    </div>
  );
}

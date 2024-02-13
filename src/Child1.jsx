import React, { useContext } from "react";
import { GlobalInfo } from "./App";
export default function Child1() {
  const { bg_Color } = useContext(GlobalInfo);
  return (
    <div>
      <h1 style={{ color: bg_Color }}>Child1 Component</h1>
    </div>
  );
}

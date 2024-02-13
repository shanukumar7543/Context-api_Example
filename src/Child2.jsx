import React, { useContext } from "react";
import { GlobalInfo } from "./App";
import SuperChild from "./SuperChild";
export default function Child2() {
  const { bg_Color } = useContext(GlobalInfo);
  return (
    <div>
      <h1 style={{ background: bg_Color }}>Child2 Component</h1>

      <SuperChild />
    </div>
  );
}

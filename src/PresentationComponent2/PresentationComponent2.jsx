import React from "react";
import {useComponent2State} from "./PresentationComponent2.state.js";

export const PresentationComponent2 = () => {
  const data = useComponent2State((state) => state.data);

  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <h2>Component 2</h2>
      <ul style={{listStyle: "none"}}>
        {data.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
};

import React from "react";
import {useComponent1State} from "./PresentationComponent1.state.js";

export const PresentationComponent1 = () => {
  const data = useComponent1State((state) => state.data);

  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <h2>Component 1</h2>
      <ul style={{listStyle: "none"}}>
        {data.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>);
};


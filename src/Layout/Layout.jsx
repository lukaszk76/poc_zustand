import React from "react";
import {PresentationComponent1} from "../PresentationComponent1/PresentationComponent1";
import {PresentationComponent2} from "../PresentationComponent2/PresentationComponent2";

export const Layout = () =>
  <div style={{display: "flex"}}>
    <PresentationComponent1/>
    <PresentationComponent2/>
  </div>

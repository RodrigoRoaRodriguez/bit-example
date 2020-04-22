import * as React from "react";
import App from "./App";
import { Picker } from "./Picker";
import SvgAsBitApp from "./SvgAsBitApp";
import SvgReactComponentBitApp from "./SvgReactComponentBitApp";

export default function WhichApp() {
  const [which, setWhich] = React.useState("CreateReactApp");

  return (
    <>
      <Picker
        values={["CreateReactApp", "Raw svg bit", "ReactComponent bit"]}
        onChange={setWhich}
      />
      {which === "CreateReactApp" && <App />}
      {which === "Raw svg bit" && <SvgAsBitApp />}
      {which === "ReactComponent bit" && <SvgReactComponentBitApp />}
    </>
  );
}

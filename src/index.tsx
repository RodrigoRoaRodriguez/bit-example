import * as React from "react";
import "./styles.css";
import { render } from "react-dom";

import WhichApp from "./WhichApp";

const rootElement = document.getElementById("root");
render(<WhichApp />, rootElement);

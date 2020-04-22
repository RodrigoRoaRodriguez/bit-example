import * as React from "react";
import { ReactComponent as Logo } from "@bit/slotmillab.svg-example.logo";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo className="App-logo" />
        <p>Raw Svg as bit component</p>
        <a
          className="App-link"
          href="https://bit.dev/slotmillab/svg-example/logo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to component
        </a>
      </header>
    </div>
  );
}

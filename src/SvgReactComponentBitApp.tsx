import * as React from "react";
import { Logo } from "@bit/slotmillab.svg-example.logo-component";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo className="App-logo" />
        <p>Exported ReactComponent as Logo from svg</p>
        <a
          className="App-link"
          href="https://bit.dev/slotmillab/svg-example/logo-component"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to component
        </a>
      </header>
    </div>
  );
}

import * as React from "react";
import { ReactComponent as Logo } from "./logo.svg";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo className="App-logo" title="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

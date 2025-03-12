import React from "react"
import ReactDOM from "react-dom/client"
import SimpleApp from "./components/SimpleApp"

// Render the simple app directly
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <SimpleApp />
  </React.StrictMode>
);


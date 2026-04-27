import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { jsx } from "react/jsx-runtime";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
jsx;
function tailwind() {
  return <h1 className="text-blue-500 text-4xl font-bold">Tailwind Working</h1>;
}
export default tailwind;

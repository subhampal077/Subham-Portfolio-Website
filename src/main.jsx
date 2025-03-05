import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// adjusting title dynamicly
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    document.title = "Be sure to checkout this before closing the internet :p";
  } else {
    document.title = "Subham Pal • Frontend Dev";
  }
});

createRoot(document.getElementById("root")).render(<App />);

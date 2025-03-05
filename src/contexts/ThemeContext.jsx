import { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [darkMode, setdarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode"))
  );

  return (
    <ThemeContext.Provider value={[darkMode, setdarkMode]}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;

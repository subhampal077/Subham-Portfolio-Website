import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import MatterCanvas from "./components/MatterCanvas";
import About from "./components/About";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./App.css";
import ThemeProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="relative">
      <ThemeProvider>
        <MatterCanvas />
        <Header />
        <Home />
        <About />
        <Work />
        <Skills />
        <Contact />
      </ThemeProvider>
    </div>
  );
}

export default App;

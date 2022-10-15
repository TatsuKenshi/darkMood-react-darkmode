import React, { useState, useEffect } from "react";
import data from "./data";
import Article from "./Article";
import "./App.scss";

const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

function App() {
  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <main className="App">
      <nav>
        <div className="nav-center">
          <h1>darkMood</h1>
          <span>
            Flip the{" "}
            <button className="btn" onClick={toggleTheme}>
              switch
            </button>
          </span>
        </div>
      </nav>
      <h4>dark mode for react applications</h4>
      <section className="articles">
        {data.map((item) => {
          const { id } = item;
          return <Article key={id} {...item} />;
        })}
      </section>
    </main>
  );
}

export default App;

import { createContext, useEffect, useState } from "react";

export const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // dark theme logic
  useEffect(() => {
    const mainDiv = document.getElementById("root");
    if (theme === "dark") {
      mainDiv.classList.add("dark");
      mainDiv.classList.remove("light");
    } else {
      mainDiv.classList.add("light");
      mainDiv.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeChange = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };
  const appInfo = {
    theme,
    handleThemeChange,
  };

  return <AppContext.Provider value={appInfo}>{children}</AppContext.Provider>;
};

export default AppContextProvider;

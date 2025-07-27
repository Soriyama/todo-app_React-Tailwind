import { useEffect, useRef, useState } from "react";
import IconMoon from "./icons/IconMoon";
import IconSun from "./icons/IconSun";

const Header = ({}) => {
  const initialStatedarkMode = localStorage.getItem("theme") === "dark";
  const [darkMode, setDarkMode] = useState(initialStatedarkMode);

  const hundleClickToggleTheme = () => {
    if (darkMode) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };
  useEffect(() => {
    hundleClickToggleTheme();
  }, [darkMode]);

  return (
    <header className="container mx-auto px-4 pt-12 md:max-w-xl">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold tracking-[0.3em] text-white uppercase">
          TODO
        </h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <IconSun /> : <IconMoon className={"fill-white"} />}
        </button>
      </div>
    </header>
  );
};

export default Header;

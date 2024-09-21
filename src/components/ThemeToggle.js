import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="p-2 bg-gray-800 text-white"
    >
      Toggle to {theme === "light" ? "dark" : "light"} theme
    </button>
  );
};

export default ThemeToggle;

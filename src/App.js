import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";

import ThemeToggle from "./components/ThemeToggle";
import Footer from "./pages/footter";
import "./App.css";
import About from "./pages/About";

function App() {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className={theme === "light" ? "light-theme" : "dark-theme"}>
      <Router>
        <nav className="app-header">
          <div className="logo">Rapid Innovation</div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact Us</Link>
            <ThemeToggle />
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </div>
  );
}

export default App;

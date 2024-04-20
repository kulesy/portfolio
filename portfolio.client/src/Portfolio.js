import "./Portfolio.css";
import Cases from "./components/Cases";
import Home from "./components/Home";
import About from "./components/About";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import logo from "./logo.png";

function Portfolio() {
  const navigate = useNavigate();
  const location = useLocation();

  function GetClasses(path) {
    let classes = "portfolio__nav__content__item";

    if (location.pathname.includes(path)) {
      classes += " active";
    }

    return classes;
  }

  return (
    <div className="portfolio">
      <div className="portfolio__nav">
        <img
          src={logo}
          className="portfolio__nav__logo"
          onClick={() => navigate("/")}
        />
        <div className="portfolio__nav__content">
          <a className={GetClasses("/cases")} href="/cases">
            Cases
          </a>
          <a className={GetClasses("/about")} href="/about">
            About
          </a>
        </div>
      </div>
      <div className="portfolio__body">
        <Routes>
          <Route path="/cases" element={<Cases />} />
          <Route path="/cases/:caseId" element={<Cases />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default Portfolio;

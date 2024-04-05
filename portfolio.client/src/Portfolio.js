import "./Portfolio.css";
import Cases from "./components/Cases";
import Home from "./components/Home";
import About from "./components/About";
import { Routes, Route, useNavigate } from "react-router-dom";
import logo from "./logo.png";

function Portfolio() {
  const navigate = useNavigate();
  return (
    <div className="portfolio">
      <div className="portfolio__nav">
        <img
          src={logo}
          className="portfolio__nav__logo"
          onClick={() => navigate("/")}
        />
        <div className="portfolio__nav__content">
          <a className="portfolio__nav__content__item" href="/cases">
            Cases
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

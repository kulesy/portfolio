import "./About.css";
import profilePhoto from "../images/1D5A0696.jpg";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="portfolio__about">
      <div className="portfolio__about__header">
        <div className="portfolio__about__header__image-container">
          <img
            src={profilePhoto}
            className="portfolio__about__header__image-container__image"
          ></img>
        </div>
        <div className="portfolio__about__header__heading">
          <h3>Elijah Kent</h3>
          <h4>Full Stack Developer</h4>
        </div>
        <div className="portfolio__about__header__socials">
          <a
            className="portfolio__about__header__socials__icon"
            href="https://github.com/kulesy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub></FaGithub>
          </a>
          <a
            className="portfolio__about__header__socials__icon"
            href="https://twitter.com/ElijahKentBJ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitterX></BsTwitterX>
          </a>
          <a
            className="portfolio__about__header__socials__icon"
            href="https://www.linkedin.com/in/elijah-kent-062254202/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin></FaLinkedin>
          </a>
        </div>
      </div>
      <div className="portfolio__about__info">
        <div className="portfolio__about__info__section">
          <h4>Languages</h4>
          <ul>
            <li>HTML/CSS/JS</li>
            <li>C#</li>
            <li>Python</li>
            <li>T-SQL</li>
            <li>PowerShell</li>
          </ul>
        </div>
        <div className="portfolio__about__info__section">
          <h4>Technologies</h4>
          <ul>
            <li>React</li>
            <li>.NET Web APIs</li>
            <li>Entity Framework</li>
            <li>SQL Server</li>
            <li>Blazor</li>
            <li>Azure Devops</li>
            <li>Git</li>
          </ul>
        </div>
        <div className="portfolio__about__info__section">
          <h4>Qualifications</h4>
          <ul>
            <li>
              NCEA Level 3 (NZ Aluminium Smelter's Prize, Distinction Award for
              Excellence in Individual Subjects Across all Classes, 1st in
              Physics and Digital Programming)
            </li>
          </ul>
        </div>
      </div>
      <div className="portfolio__about__content">
        <p>
          Hello and welcome to my portfolio.
          <br></br> <br></br>I am a full stack software developer from
          Melbourne, Australia.
          <br></br> <br></br>
          Software development is my passion which just so happens to be my job.
          I have two years total of professional development but I have been
          doing programming as a hobby for almost four years now.
          <br></br> <br></br>
          Most my work experience highly involves .NET Technologies (Blazor,
          .NET Web APIs, Entity Framework) and SQL Server. I also have a couple
          websites that I am actively managing as a freelancer (One made using
          webflow and the other using purely HTML/CSS/Javascript).
          <br></br> <br></br>
          As a hobbyist, however, I have been exploring other languages and
          technologies. This{" "}
          <a
            href="https://github.com/kulesy/portfolio"
            style={{ textDecoration: "underline" }}
          >
            portfolio
          </a>{" "}
          for example is made with React and Express, where I have found my
          skills in full stack development using .NET easily transferrable to
          Javascript Frameworks. As React is the standard framework for most
          modern web applications I am looking develop my experience in that
          field.
          .
        </p>
      </div>
    </div>
  );
}

export default About;

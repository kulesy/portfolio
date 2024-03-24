import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { getCases } from "../clients/ApiClient";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate } from "react-router-dom";

function Home() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getCases();
        setData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();

    return () => {};
  }, []); // Empty dependency array means this effect runs once on mount

  let content;

  if (data != null) {
    content = data.map((caseContent, index) => {
      return (
        <div
          tabIndex={0}
          className="portfolio__home__content__showcase__case"
          key={index}
          onClick={() => navigate(`/cases/${caseContent.CaseID}`)}
        >
          <img
            className="portfolio__home__content__showcase__case__image"
            src={`https://localhost:3001/api/caseimages/blob/${caseContent?.CaseImageIds[0]}`}
            alt={caseContent.CaseName}
          />
        </div>
      );
    });
  } else {
    content = (
      <Spinner>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <div className="portfolio__home">
      <h1 className="portfolio__home__heading">Kule Digital Portfolio</h1>
      <div className="portfolio__home__content">
        <div className="portfolio__home__content__showcase">{content}</div>
        <div className="portfolio__home__content__showcase__button-group">
          <button className="button-primary" onClick={() => navigate(`/cases`)}>
            View Cases
          </button>
          <button
            className="button-secondary"
            onClick={() => navigate(`/about`)}
          >
            About Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

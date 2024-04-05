import "./CasesSidebar.css";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ApiConsts from "../consts/ApiConsts"

function CasesSidebar({
  cases,
  activeCaseId,
  sidebarScrollCallback,
  caseSelectedCallback,
}) {
  const scrollableRef = useRef(null); // Create a ref for the scrollable element
  let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    const scrollableElement = scrollableRef.current;
    const handleScroll = () => {
      sidebarScrollCallback(scrollableElement.scrollTop); // Log the scroll position
    };

    scrollableElement.addEventListener("scroll", handleScroll);

    return () => {
      scrollableElement.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty array ensures this effect runs only once after the initial render

  function handleClick(caseId) {
    let selectedCaseUrl = `/cases/${caseId}`;
    if (location.pathname != selectedCaseUrl) {
      navigate(selectedCaseUrl, { replace: true });
    } else {
      caseSelectedCallback(caseId);
    }
  }

  function GetClasses(caseId) {
    let className = "portfolio__cases-sidebar__content__case";

    if (activeCaseId == caseId) {
      className += " active";
    }

    return className;
  }

  let content;

  if (cases != null) {
    content = cases.map((caseContent, index) => {
      return (
        <div
          className={GetClasses(caseContent.CaseID)}
          key={index}
          onClick={() => handleClick(caseContent.CaseID)}
        >
          <img
            className="portfolio__cases-sidebar__content__case__image"
            src={`${ApiConsts.ImageDownloadApi}/${caseContent?.CaseImageIds[0]}`}
            alt={caseContent.CaseName}
          />
          <h6 className="portfolio__cases-sidebar__content__case__name">
            {caseContent.CaseName}
          </h6>
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
    <div
      ref={scrollableRef}
      className="portfolio__cases-sidebar"
      id="portfolio__cases-sidebar"
    >
      <div
        className="portfolio__cases-sidebar__content"
        id="portfolio__cases-sidebar__content"
      >
        {content}
      </div>
    </div>
  );
}

export default CasesSidebar;

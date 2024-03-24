import React, { useState, useEffect, useRef } from "react";
import CasesSidebar from "./CasesSidebar";
import Case from "./Case";
import "./Cases.css";
import { getCases } from "../clients/ApiClient";
import { useParams } from "react-router-dom";

function Cases() {
  let { caseId } = useParams();
  let isProgrammaticScroll = false;

  const [data, setData] = useState(null);
  const [activeCaseId, setActiveCaseId] = useState(1);

  const casesContentRef = useRef(null);

  const handleCaseSelectedCallback = (caseId) => {
    let targetElementRef = document.getElementById(`case-${caseId}`);

    // Ensure the element is present
    if (targetElementRef) {
      const casesContentElement = casesContentRef.current;
      casesContentElement.scrollTop = targetElementRef.offsetTop;
    }
    setActiveCaseId(caseId);
  };

  const handleSidebarScrollCallback = (scrollValue) => {
    if (isProgrammaticScroll) {
      isProgrammaticScroll = false;
      return;
    }
    const casesContentElement = casesContentRef.current;
    let sidebarToContentRatio = getSidebarToContentRatio();
    let newScrollValue = scrollValue * sidebarToContentRatio;
    casesContentElement.scrollTop = newScrollValue;

    let currentCaseId =
      Math.round(
        casesContentElement.scrollTop / casesContentElement.offsetHeight
      ) + 1;
    setActiveCaseId(currentCaseId);

    isProgrammaticScroll = true;
  };

  const handleContentScrollCallback = () => {
    if (isProgrammaticScroll) {
      isProgrammaticScroll = false;
      return;
    }

    let sideBarElement = document.getElementById("portfolio__cases-sidebar");
    const casesContentElement = casesContentRef.current;
    let currentCaseId =
      Math.round(
        casesContentElement.scrollTop / casesContentElement.offsetHeight
      ) + 1;
    setActiveCaseId(currentCaseId);
    let sidebarToContentRatio = getSidebarToContentRatio();
    let newScrollValue =
      casesContentElement.scrollTop * (1 / sidebarToContentRatio);
    sideBarElement.scrollTop = newScrollValue;

    isProgrammaticScroll = true;
  };

  function getSidebarToContentRatio() {
    let sideBarElement = document.getElementById("portfolio__cases-sidebar");
    let sideBarContentElement = document.getElementById(
      "portfolio__cases-sidebar__content"
    );
    const casesContentElement = casesContentRef.current;
    let caseContentScrollOffset =
      casesContentElement.scrollHeight - casesContentElement.offsetHeight;
    let sidebarScrollOffset =
      sideBarContentElement.offsetHeight - sideBarElement.offsetHeight;
    let ratio = caseContentScrollOffset / sidebarScrollOffset;
    return ratio;
  }

  useEffect(() => {
    const casesContentElement = casesContentRef.current;
    casesContentElement.addEventListener("scroll", handleContentScrollCallback);

    const getData = async () => {
      try {
        const response = await getCases();
        setData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();

    return () => {
      casesContentElement.removeEventListener(
        "scroll",
        handleContentScrollCallback
      );
    };
  }, []);

  useEffect(() => {
    handleCaseSelectedCallback(caseId);
  }, [data, caseId]);

  return (
    <div className="portfolio__cases">
      <CasesSidebar
        cases={data}
        activeCaseId={activeCaseId}
        sidebarScrollCallback={handleSidebarScrollCallback}
        caseSelectedCallback={handleCaseSelectedCallback}
      />
      <div ref={casesContentRef} className="portfolio__cases_container">
        {data?.map((c, index) => {
          return <Case caseModel={c} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Cases;

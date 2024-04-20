import "./Case.css";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";
import ApiConsts from "../consts/ApiConsts";
import Lightbox from "./Lightbox";
import React, { useState } from "react";
import { LuExternalLink } from "react-icons/lu";

function Case({ caseModel }) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const caseContent = (
    <div className="portfolio__case" id={`case-${caseModel?.CaseID}`}>
      <div
        className="portfolio__case__image-container"
        onClick={() => setIsLightboxOpen(true)}
      >
        <img
          className="portfolio__case__image-container__image"
          src={`${ApiConsts.ImageDownloadApi}/${caseModel?.CaseImageIds[0]}`}
        ></img>
      </div>
      <div className="portfolio__case__content">
        <div className="portfolio__case__content__heading">
          <h3>{caseModel?.CaseName}</h3>
          <a
            className="portfolio__case__content__heading__link"
            href={caseModel?.CaseLink}
          >
            <LuExternalLink></LuExternalLink>
          </a>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: caseModel?.CaseDescription }}
        ></div>
      </div>
      {isLightboxOpen && (
        <Lightbox
          key={isLightboxOpen}
          imageIds={caseModel.CaseImageIds}
          closeEventCallback={() => setIsLightboxOpen(false)}
        ></Lightbox>
      )}
    </div>
  );

  if (caseModel) {
    return caseContent;
  } else {
    return (
      <Spinner>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
}

export default Case;

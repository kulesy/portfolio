import "./Case.css";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";

function Case({ caseModel }) {
  const caseContent = (
    <div className="portfolio__case" id={`case-${caseModel?.CaseID}`}>
      <div className="portfolio__case__image-container">
        <img
          className="portfolio__case__image-container__image"
          src={`https://localhost:3001/api/caseimages/blob/${caseModel?.CaseImageIds[0]}`}
        ></img>
      </div>
      <div className="portfolio__case__content">
        <h3 className="portfolio__case__content__heading">
          {caseModel?.CaseName}
        </h3>
        <div
          dangerouslySetInnerHTML={{ __html: caseModel?.CaseDescription }}
        ></div>
      </div>
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

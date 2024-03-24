class Service {
  constructor() {
    const XLSX = require("xlsx");

    const filePath = "./PortfolioCases.xlsx";

    const portfolioDb = XLSX.readFile(filePath);

    this.cases = XLSX.utils.sheet_to_json(portfolioDb.Sheets["Cases"]);
    this.caseImages = XLSX.utils.sheet_to_json(
      portfolioDb.Sheets["CaseImages"]
    );
    this.cases.forEach((c) => {
      c.CaseImageIds = this.caseImages
        .filter((e) => e.CaseID == c.CaseID)
        .map((caseImage) => {
          return caseImage.CaseImageID;
        });
    });
  }

  getCases() {
    return this.cases;
  }

  getCaseById(id) {
    const record = this.cases.find((row) => row.CaseID == id);
    return record;
  }

  getCaseImageById(id) {
    const record = this.caseImages.find((row) => row.CaseImageID == id);
    return record;
  }
}

module.exports = Service;

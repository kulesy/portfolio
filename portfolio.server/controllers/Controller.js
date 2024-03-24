class Controller {
  start() {
    const express = require("express");
    const cors = require("cors");
    const fs = require("fs");
    const path = require("path");
    const app = express();
    const port = 3001;
    const https = require("https");
    const Service = require("../services/Service");
    const service = new Service();

    const privateKey = fs.readFileSync("server.key", "utf8");
    const certificate = fs.readFileSync("server.cert", "utf8");

    const credentials = { key: privateKey, cert: certificate };

    const httpsServer = https.createServer(credentials, app);

    app.use(express.json()); // Middleware to parse JSON bodies

    // Allow requests from a specific origin
    app.use(cors());

    httpsServer.listen(port, () => {
      console.log(`API server listening at https://localhost:${port}`);
    });

    // Get all cases
    app.get("/api/cases", (req, res) => {
      const caseModels = service.getCases();
      res.json(caseModels);
    });

    // Get a single case
    app.get("/api/cases/:id", (req, res) => {
      const caseModel = service.getCaseById(req.params.id);
      if (!caseModel) {
        return res.status(404).send("Case not found.");
      }

      res.json(caseModel);
    });

    // Get image stream
    app.get("/api/caseImages/blob/:id", (req, res) => {
      const caseImage = service.getCaseImageById(req.params.id);
      const filePath = path.join(
        __dirname,
        `../images/${caseImage.CaseImageFileName}`
      );

      const readStream = fs.createReadStream(filePath);

      res.writeHead(200, {
        "Content-Type": "text/plain",
      });

      readStream.pipe(res);
    });
  }
}

module.exports = Controller;

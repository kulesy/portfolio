const Controller = require("./controllers/Controller");
const awsServerlessExpress = require("aws-serverless-express");
const binaryMimeTypes = ["image/jpeg", "image/png"];
const server = awsServerlessExpress.createServer(
  Controller,
  undefined,
  binaryMimeTypes
);

exports.handler = (event, context) => {
  awsServerlessExpress.proxy(server, event, context);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Directory listed in the logs" }),
  };
};

const Controller = require('./controllers/Controller');
const awsServerlessExpress = require("aws-serverless-express");

exports.handler = (event, context) => {
  awsServerlessExpress.proxy(Controller, event, context);
};

const controller = new Controller();
controller.start();
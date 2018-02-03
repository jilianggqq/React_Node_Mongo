// npm install --save serverless-dynamodb-local
// npm install --save serverless-dynamodb-client
// there are still some bugs. I have no time to test that.
var AWS = require("aws-sdk");
var dynamodb = require("serverless-dynamodb-client");

var rawClient = dynamodb.raw; // returns an instance of new AWS.DynamoDB()

var docClient = dynamodb.doc; // return an instance of new AWS.DynamoDB.DocumentClient()
rawClient.listTables(function(err, data) {
  console.log("listTables", err, data);
});

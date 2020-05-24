require("dotenv").config();
console.log(process.env);

var apiKey = process.env.TRELLO_API_KEY;
var oauthToken = process.env.TRELLO_OAUTH_TOKEN;

var Trello = require("../../../lib/trello-node-api")(apiKey, oauthToken);

console.log(apiKey);

var memberRequest = function () {
  Trello.member
    .search("5ec94046b8bb975a797a597e")
    .then(function (response) {
      console.log("response ", response);
    })
    .catch(function (error) {
      console.log("error", error);
    });
};

memberRequest();

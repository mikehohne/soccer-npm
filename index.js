
var request = require('request');

exports.getTeams = function(id) {
  var url = "http://api.football-data.org/v1/teams"
  request(url + "/" + id, function (error, response, body) {
    if(error){
      return console.error("An error occurred: " + error)
    }
    console.log('body:', body);
    })
  },

exports.getAllComps = function(id,info,includeTeams){
  if(id){
    url += "/" + id + "/" + info;
  }
  request(url, function (error, response, body) {
    var results = body;
    if(error){
      return console.error("An error occurred: " + error)
    }
    if(includeTeams){
      return console.log(results)
    }
    return console.log(JSON.parse(body));
  })
}

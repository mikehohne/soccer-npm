var request = require('request');

let url = 'http://api.football-data.org/v1/competitions';


var getAllComps = function(id,info){
  if(id){
    url += "/" + id + "/" + info;
  }
  request(url, function (error, response, body) {
    if(error){
      return console.error("An error occurred: " + error)
    }
    console.log('body:', body);
  })
}

var getComp = function(id){
  request(url + "/" + id, function (error, response, body) {
    if(error){
      return console.error("An error occurred: " + error)
    }
    console.log('body:', body);
  });
}

var getTeams = function(id) {
  var url = "http://api.football-data.org/v1/teams"
  request(url + "/" + id, function (error, response, body) {
    if(error){
      return console.error("An error occurred: " + error)
    }
    console.log('body:', body);
  })
}


getAllComps(457, "teams")

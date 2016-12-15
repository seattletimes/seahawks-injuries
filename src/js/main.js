// require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");
// require("./chart.js");
var dot = require("./lib/dot");

var detailTemplate = dot.compile(require("./_detail.html"));


//script for updating chart
$(".button").on("click", function(e) {
  if ($(e.target).hasClass("button")) {
    if (e.target == "1") {
        game = game01;
      }
      else if (e.target == "2") {
        game = game02;
      }
      else {
      	
      }
    })
  }
})
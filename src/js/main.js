// require("./lib/ads");
// require("./lib/social");
// var track = require("./lib/tracking");

var $ = require("./lib/qsa");

require("component-responsive-frame/child");
require("savage-image");
// require("./chart.js");
var dot = require("./lib/dot");

var onClickPlayer = function(e) {
  var id = this.getAttribute("data-jersey");
  var player = window.players[id];
  console.log(player.name, player.injuries);
};

// $(".player").on("click", onClickPlayer);
$(".player").forEach(el => el.addEventListener("click", onClickPlayer));
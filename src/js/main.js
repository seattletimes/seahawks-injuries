// require("./lib/ads");
// require("./lib/social");
// var track = require("./lib/tracking");

var $ = require("./lib/qsa");

require("component-responsive-frame/child");
// require("./chart.js");
var dot = require("./lib/dot");

var detailTemplate = dot.compile(require("./_detail.html"));

var games = {};

window.injuries.forEach(function(data) {
  var number = data.game;
  if (!games[number]) {
    games[number] = [];
  }
  games[number].push(data)
});

var chartBox = document.querySelector("#chart-box");
var selectPlayer = document.querySelector(".choose-player");

selectPlayer.addEventListener("change", function(e) {
  console.log(selectPlayer.value);
})

var onClickGame = function(e) {
  var gameNumber = this.getAttribute("data-game");
  var game = games[gameNumber] || [];
  var selected = selectPlayer.value;
  chartBox.innerHTML = detailTemplate({ game, selected });
  // { game: game, selected: selected }
};

$(".game-button").forEach(el => el.addEventListener("click", onClickGame));

/*
TODO:
 - take counts and turn them into icons
 - create the sums and display those instead
 - color icons depending on selected player
 - 


*/
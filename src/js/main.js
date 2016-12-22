// require("./lib/ads");
// require("./lib/social");
// var track = require("./lib/tracking");

var $ = require("./lib/qsa");

require("component-responsive-frame/child");
// require("./chart.js");
var dot = require("./lib/dot");

var detailTemplate = dot.compile(require("./_detail2.html"));

var games = {};

window.injuries.forEach(function(injury) {
  var number = injury.game;
  if (!games[number]) {
    games[number] = [];
  }
  games[number].push(injury)
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
  
  var injuryData = {}; // creates new data obj

  // { game: game, selected: selected } // read this again
  for (var i = 1; i <= gameNumber; i++) {
    games[i].forEach(function(injury) {
      if (!injuryData[injury.injuries]) injuryData[injury.injuries] = {selected: 0, notSelected: 0};
      if (injury.player.toString() == selected) {
        injuryData[injury.injuries].selected += 1;
      } else {
        injuryData[injury.injuries].notSelected += 1;
      }
    });
  }

  console.log(injuryData)


    chartBox.innerHTML = detailTemplate(injuryData);
};

$(".game-button").forEach(el => el.addEventListener("click", onClickGame));

/*
TODO:
 - take counts and turn them into icons [x]
 - create the sums and display those instead [x]
 - color icons depending on selected player [x]
 - 


*/
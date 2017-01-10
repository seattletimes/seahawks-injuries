// require("./lib/ads");
// require("./lib/social");
// var track = require("./lib/tracking");

var $ = require("./lib/qsa");

require("component-responsive-frame/child");
require("savage-image");
// require("./chart.js");
var dot = require("./lib/dot");

var detailTemplate = dot.compile(require("./_detail.html"));
var detailElement = document.querySelector(".details");
var selectPlayer = document.querySelector(".choose-player");

//default game number
var currentGame = null;

var showDetail = function(id) {
  var player = window.players[id];
  detailElement.innerHTML = detailTemplate({ player, game: currentGame });
};

var onClickPlayer = function(e) {
  var id = this.getAttribute("data-jersey");
  showDetail(id);
  selectPlayer.value = id;
};

var onChoosePlayer = function() {
  var id = this.value;
  showDetail(id);
};

//function for highlighting bar chart by adding .active class
var highlightChart = function(g) {
  $(".bar.active").forEach(t => t.classList.remove("active"));
  var barGame = $(".data-game");
  // do I need to do something with innerHTML?

}


// $(".player").on("click", onClickPlayer);
var players = $(".player")
players.forEach(el => el.addEventListener("click", onClickPlayer));
players.forEach(el => el.addEventListener("keyup", onClickPlayer));

selectPlayer.addEventListener("change", onChoosePlayer);

var switchTab = function(e) {
  if (e) e.preventDefault();
  $(".switch-tab.activated").forEach(t => t.classList.remove("activated"));
  this.classList.add("activated");
  var id = this.getAttribute("href");
  $(".players-by-line").forEach(t => t.classList.add("hidden"));
  var shown = document.querySelector(id);
  shown.classList.remove("hidden");

  var first = shown.querySelector(".player");
  var p = first.getAttribute("data-jersey");

  showDetail(p);
  selectPlayer.value = p;

};

$(".switch-tab").forEach(el => el.addEventListener("click", switchTab));

switchTab.call(document.querySelector(".switch-tab"));
 

detailElement.addEventListener("click", function(e) {
  var target = e.target;
  var game = target.getAttribute("data-game");
  if (!game) return; // I added items below this line
  console.log(game);
  // when you click on a game remove current and add to the one clicked
  $(".game.current").forEach(t => t.classList.remove("current"));
  e.target.classList.add("current");
  //some function here
  highlightChart(game);
});



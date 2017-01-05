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

var currentGame = 6;

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

// $(".player").on("click", onClickPlayer);
$(".player").forEach(el => el.addEventListener("click", onClickPlayer));

selectPlayer.addEventListener("change", onChoosePlayer);

var switchTab = function(e) {
  if (e) e.preventDefault();
  $(".switch-tab.activated").forEach(t => t.classList.remove("activated"));
  this.classList.add("activated");
  var id = this.getAttribute("href");
  $(".players-by-line").forEach(t => t.classList.add("hidden"));
  document.querySelector(id).classList.remove("hidden");
};

$(".switch-tab").forEach(el => el.addEventListener("click", switchTab));

switchTab.call(document.querySelector(".switch-tab"));
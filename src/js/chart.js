var Chartist = require("chartist");
var $ = require("jquery");

var injuriesData = {
  labels: [
    "Knee", "Leg", "Elbow", "Shoulder"
  ],
  series: [
    [2, 1, 0],
    [1, 0, 0]
  ]
};

var injuriesChart = new Chartist.Bar('#ct-injuries', injuriesData, {
  stackBars: true,
  axisY: {
    labelInterpolationFnc: function(value) {
      return (value) + '%';
    }
  },
  axisY: {
    showGrid: false,
    //offset: 400
  }
},
[
  ['(max-width: 768px)', {
    axisY: {
      offset: 250
    }
  }],
  ['(max-width: 480px)', {
    axisY: {
      offset: 210
    }
  }]
]);

var $chart = $('#ct-injuries');

var $toolTip = $chart
  .append('<div class="tooltip"></div>')
  .find('.tooltip')
  .hide();

$chart.on('mouseenter', '.ct-bar', function() {
  var $bar = $(this);
  var value = Math.round($bar.attr('ct:value'));
  $toolTip.html(
    `<strong>${value} injuries</strong>`
  ).show();
});

$chart.on('mouseleave', '.ct-bar', function() {
  $toolTip.hide();
});

$chart.on('mousemove', function(event) {
  $toolTip.css({
    left: (event.offsetX || event.originalEvent.layerX) - $toolTip.width() / 2 - 10,
    top: (event.offsetY || event.originalEvent.layerY) - $toolTip.height() - 30
  });
});
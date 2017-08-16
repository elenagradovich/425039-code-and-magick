'use strict';

function getMaxNumber(times) {
  var max = -1;
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }
  return max;
}
function getRandomColor() {
  var maxIndexColor = 255;
  return 'rgb(0, 0,' + Math.floor(Math.random() * maxIndexColor) + ')';
}
function identifyColorChart(i, names) {
  if (names[i] === 'Вы') {
    return 'red';
  } else {
    return getRandomColor();
  }
}
window.renderStatistics = function (ctx, names, times) {
  var initialPositionTextX = 100;
  var initialPositionTextY = 10;
  var biasText = 10;
  var widthMessage = 420;
  var heightMessage = 270;
  var histogramHeight = 150;
  var indent = 50;
  var initialColumnX = 150;
  var initialColumnY = 250;
  var width = 40;
  var biasResultY = 5;
  var biasNameY = 20;
  var step = histogramHeight / getMaxNumber(times);
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(initialPositionTextX + biasText, initialPositionTextY + biasText, widthMessage, heightMessage);

  ctx.fillStyle = 'white';
  ctx.fillRect(initialPositionTextX, initialPositionTextY, widthMessage, heightMessage);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);
  for (var i = 0; i < times.length; ++i) {

    ctx.fillStyle = 'black';
    ctx.fillText(Math.round(times[i]), initialColumnX + (indent + width) * i, initialColumnY - biasResultY - times[i] * step);

    ctx.fillStyle = identifyColorChart(i, names);
    ctx.fillRect(initialColumnX + (indent + width) * i, initialColumnY - times[i] * step, width, times[i] * step);

    ctx.fillStyle = 'black';
    ctx.fillText(names[i], initialColumnX + (indent + width) * i, initialColumnY + biasNameY);
  }
};

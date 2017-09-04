'use strict';

(function () {
  window.util = {
    userDialog: document.querySelector('.setup'),
    coatColors: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    eyesColors: ['black', 'red', 'blue', 'yellow', 'green'],
    getRandomValue: function (arrayValues) {
      var indexName = Math.floor(Math.random() * arrayValues.length);
      return arrayValues[indexName];
    }
  };
})();

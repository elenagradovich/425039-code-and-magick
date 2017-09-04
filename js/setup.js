'use strict';

(function () {
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  var wizardFirstNames = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var wizardSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

  var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

  function createWizardObject() {
    return {
      name: window.util.getRandomValue(wizardFirstNames) + ' ' + window.util.getRandomValue(wizardSurnames),
      coatColor: window.util.getRandomValue(coatColors),
      eyesColor: window.util.getRandomValue(eyesColors)
    };
  }

  var wizards = [];
  for (var i = 0; i < 4; i++) {
    wizards.push(createWizardObject());
  }

  function generateWizard(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  }
  var fragment = document.createDocumentFragment();
  for (var j = 0; j < 4; j++) {
    fragment.appendChild(generateWizard(wizards[j]));
  }

  similarListElement.appendChild(fragment);
  window.util.userDialog.querySelector('.setup-similar').classList.remove('hidden');
})();

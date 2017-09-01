'use strict';

var userDialog = document.querySelector('.setup');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var wizardFirstNames = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

function getRandomValue(arrayValues) {
  var indexName = Math.floor(Math.random() * arrayValues.length);
  return arrayValues[indexName];
}

function createWizardObject() {
  return {
    name: getRandomValue(wizardFirstNames) + ' ' + getRandomValue(wizardSurnames),
    coatColor: getRandomValue(coatColors),
    eyesColor: getRandomValue(eyesColors)
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
userDialog.querySelector('.setup-similar').classList.remove('hidden');

var setupOpen = document.querySelector('.setup-open');
var setupClose = userDialog.querySelector('.setup-close');
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var inputSetupUserName = document.querySelector('.setup-user-name');

var wizardFireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var popupEscHeandler = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    userDialog.classList.add('hidden');
  }
};

var openPopup = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', popupEscHeandler);
};

var closePopup = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', popupEscHeandler);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

var inputValidHeandler = function () {
  inputSetupUserName.setCustomValidity('');
  if (!inputSetupUserName.validity.valid) {
    if (inputSetupUserName.validity.tooShort) {
      inputSetupUserName.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (inputSetupUserName.validity.tooLong) {
      inputSetupUserName.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (inputSetupUserName.validity.valueMissing) {
      inputSetupUserName.setCustomValidity('Обязательное поле');
    }
  } else {
    inputSetupUserName.setCustomValidity('');
  }
};

inputSetupUserName.addEventListener('invalid', inputValidHeandler);
inputSetupUserName.addEventListener('change', inputValidHeandler);


setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

var wizardCoatColor = document.querySelector('#wizard-coat');
var wizardEyesColor = document.querySelector('#wizard-eyes');
var wizardCoatChange = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyesChange = document.querySelector('.setup-wizard .wizard-eyes');
var wizardFireballColor = document.querySelector('.setup-fireball-wrap');
var wizardCoatInput = document.querySelector('.setup-wizard-appearance > input[name="coat-color"]');
var wizardEyesInput = document.querySelector('.setup-wizard-appearance > input[name="eyes-color"]');
var wizardFireballInput = document.querySelector('.setup-fireball-wrap > input[name="fireball-color"]');

wizardCoatColor.addEventListener('click', function () {
  var randomCoatColor = getRandomValue(coatColors);
  wizardCoatChange.style.fill = randomCoatColor;
  wizardCoatInput.value = randomCoatColor;

});

wizardEyesColor.addEventListener('click', function () {
  var randomEyesColor = getRandomValue(eyesColors);
  wizardEyesChange.style.fill = randomEyesColor;
  wizardEyesInput.value = randomEyesColor;
});

wizardFireballColor.addEventListener('click', function () {
  var randomFireballColor = getRandomValue(wizardFireballColors);
  wizardFireballColor.style.background = randomFireballColor;
  wizardFireballInput.value = randomFireballColor;
});

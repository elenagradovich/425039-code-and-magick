'use strict';

(function () {
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = window.util.userDialog.querySelector('.setup-close');
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var inputSetupUserName = document.querySelector('.setup-user-name');

  var wizardFireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var popupEscHeandler = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      if (document.activeElement !== inputSetupUserName) {
        window.util.userDialog.classList.add('hidden');
      }
    }
  };

  var openPopup = function () {
    window.util.userDialog.classList.remove('hidden');
    document.addEventListener('keydown', popupEscHeandler);
  };

  var closePopup = function () {
    window.util.userDialog.classList.add('hidden');
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
  inputSetupUserName.addEventListener('input', inputValidHeandler);


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
    var randomCoatColor = window.util.getRandomValue(window.util.coatColors);
    wizardCoatChange.style.fill = randomCoatColor;
    wizardCoatInput.value = randomCoatColor;

  });

  wizardEyesColor.addEventListener('click', function () {
    var randomEyesColor = window.util.getRandomValue(window.util.eyesColors);
    wizardEyesChange.style.fill = randomEyesColor;
    wizardEyesInput.value = randomEyesColor;
  });

  wizardFireballColor.addEventListener('click', function () {
    var randomFireballColor = window.util.getRandomValue(wizardFireballColors);
    wizardFireballColor.style.background = randomFireballColor;
    wizardFireballInput.value = randomFireballColor;
  });
})();



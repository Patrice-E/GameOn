function editNav() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

// DOM Elements
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const formData = document.querySelectorAll('.formData');
const closeModalBtn = document.querySelector('.close');
const firstName = document.querySelector('#first');
const firstMsg = document.querySelector('#firstMsg');
const lastName = document.querySelector('#last');
const lastMsg = document.querySelector('#lastMsg');
const email = document.querySelector('#email');
const emailMsg = document.querySelector('#emailMsg');
const birthdate = document.querySelector('#birthdate');
const birthdateMsg = document.querySelector('#birthdateMsg');
const nbCompetition = document.querySelector('#quantity');
const nbCompetitionMsg = document.querySelector('#quantityMsg');
const loc = document.getElementsByName('location');
const locMsg = document.querySelector('#locationMsg');
const checkbox = document.querySelector('#checkbox1');
const checkboxMsg = document.querySelector('#checkboxMsg');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = 'block';
}

// close modal event
closeModalBtn.addEventListener('click', closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = 'none';
}

// launch modal for valid form
function launchValidModal() {
  modalvalid.style.display = 'block';
}

// Set Success or Danger Messages
function setMsgType(field, label, msgType, msgText) {
  let opposite = 'success';
  if (msgType === 'success') {
    opposite = 'danger';
  }
  field.classList.remove('border__' + opposite);
  field.classList.add('border__' + msgType);
  label.classList.remove('msg__' + opposite);
  label.classList.add('msg__' + msgType);
  label.innerHTML = msgText;
}

// Changes in first and last
function getIsValidString(input, outputMsg) {
  const str = input.value;
  if (str.length >= 2) {
    return true;
  }
  const errorType = 'danger';
  const errorMsg = 'Veuillez entrer deux caractères minimum';
  setMsgType(input, outputMsg, errorType, errorMsg);
  return false;
}
function sendStringMsg(input, outputMsg) {
  let errorType = 'danger';
  let errorMsg = 'Veuillez entrer deux caractères minimum';
  if (getIsValidString(input, outputMsg)) {
    errorType = 'success';
    errorMsg = 'Champ valide';
  }
  setMsgType(input, outputMsg, errorType, errorMsg);
}
firstName.addEventListener('input', function () {
  sendStringMsg(first, firstMsg);
});
lastName.addEventListener('input', function () {
  sendStringMsg(last, lastMsg);
});

// Changes in email
function getIsValidEmail(input) {
  const email = input.value;
  const regExpEmail = new RegExp(
    '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$'
  );
  if (regExpEmail.test(email)) {
    return true;
  }
  const errorType = 'danger';
  const errorMsg = 'email non valide';
  setMsgType(input, emailMsg, errorType, errorMsg);
  return false;
}
email.addEventListener('input', function () {
  let errorType = 'danger';
  let errorMsg = 'email non valide';
  if (getIsValidEmail(this)) {
    errorType = 'success';
    errorMsg = 'Champ valide';
  }
  setMsgType(this, emailMsg, errorType, errorMsg);
});

// Changes in birthdate
function getIsValidBirthDate(input) {
  const value = input.value;
  if (!value) {
    const errorType = 'danger';
    const errorMsg = 'date non valide';
    setMsgType(input, birthdateMsg, errorType, errorMsg);
    return false;
  }
  return true;
}
birthdate.addEventListener('change', function () {
  let errorType = 'danger';
  let errorMsg = 'date non valide';
  if (getIsValidBirthDate(this)) {
    errorType = 'success';
    errorMsg = 'Champ valide';
  }
  setMsgType(this, birthdateMsg, errorType, errorMsg);
});

// Changes on number of competitions
function getIsNumber(input) {
  const nb = input.value;
  if (nb > 0) {
    return true;
  }
  const errorType = 'danger';
  const errorMsg = 'email non valide';
  setMsgType(input, nbCompetitionMsg, errorType, errorMsg);
  return false;
}
nbCompetition.addEventListener('input', function () {
  let errorType = 'danger';
  let errorMsg = 'Veuiller entrer une valeur numérique';
  if (getIsNumber(this)) {
    errorType = 'success';
    errorMsg = 'Champ valide';
  }
  setMsgType(this, nbCompetitionMsg, errorType, errorMsg);
});

// Changes in location
function getIsValidLocation() {
  let locCheck = false;
  for (let i = 0; i < loc.length; i++) {
    const isCheck = loc[i].checked;
    if (isCheck) {
      locCheck = true;
    }
  }
  if (locCheck) {
    return true;
  }
  const errorType = 'danger';
  const errorMsg = 'Saississez un tournoi';
  loc.forEach((inputRadio) =>
    setMsgType(inputRadio, locMsg, errorType, errorMsg)
  );
  return false;
}
loc.forEach((inputRadio) =>
  inputRadio.addEventListener('input', function () {
    let errorType = 'danger';
    let errorMsg = 'Saississez un tournoi';
    if (getIsValidLocation) {
      errorType = 'success';
      errorMsg = 'Champ valide';
    }
    setMsgType(this, locMsg, errorType, errorMsg);
  })
);

// Changes in use conditions
function getIsConditionChecked(box) {
  if (box.checked) {
    return true;
  }
  const errorType = 'danger';
  const errorMsg = "Veuillez accepter les conditions d'utilisation";
  setMsgType(checkbox, checkboxMsg, errorType, errorMsg);
  return false;
}
checkbox.addEventListener('change', function () {
  let errorType = 'danger';
  let errorMsg = "Veuillez accepter les conditions d'utilisation";
  if (getIsConditionChecked(this)) {
    errorType = 'success';
    errorMsg = 'Champ valide';
  }
  setMsgType(this, checkboxMsg, errorType, errorMsg);
});

const modalBody = document.querySelector('.modal-body');
const modalValid = document.querySelector('.modal-valid');
function modalValidForm() {
  modalBody.style.display = 'none';
  closeModalBtn.style.display = 'none';
  modalValid.style.display = 'grid';
}
// validate form
function validate() {
  const firstValid = getIsValidString(first, firstMsg);
  const lastValid = getIsValidString(last, lastMsg);
  const emailValid = getIsValidEmail(email);
  const birthdateValid = getIsValidBirthDate(birthdate);
  const nbCompetitionValid = getIsNumber(nbCompetition);
  const locValid = getIsValidLocation();
  const conditionChecked = getIsConditionChecked(checkbox);
  if (
    firstValid &&
    lastValid &&
    emailValid &&
    birthdateValid &&
    nbCompetitionValid &&
    locValid &&
    conditionChecked
  ) {
    modalValidForm();
    return false;
  } else {
    return false;
  }
}

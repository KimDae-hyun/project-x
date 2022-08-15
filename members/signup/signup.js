const stateMsg = {
  id: {
    invalid: '5 ~ 15자의 영문자와 숫자만 사용 가능합니다.',
    success: '사용할 수 있는 아이디입니다.',
    fail: '사용할 수 없는 아이디입니다.',
  },
  pw: '8~15자의 영문자, 숫자, 특수문자(!@#$%^&*)가 포함되어야 합니다.',
  pwRet: {
    success: '비밀번호가 일치합니다',
    fail: '비밀번호가 일치하지 않습니다',
  },
  phone: '휴대전화 번호는 3 - 4 - 4 자리의 숫자만 입력해야 합니다.',
  email: 'email 아이디는 4 ~ 20자의 영문자 및 숫자만 입력 가능합니다.',
};

const user = {
  id: null,
  pw: null,
  name: null,
  phone: null,
  email: null,
};

/* user Id */
const inputId = document.querySelector('#id input');
const idMsg = document.querySelector('#id .stateMsg');
const idButton = document.querySelector('#id button');

inputId.addEventListener('change', () => {
  const checkId = /^[a-zA-Z0-9]{5,15}$/;
  if (checkId.test(inputId.value)) {
    idMsg.textContent = '';
    user.id = inputId.value;
  } else if (inputId.value === '') {
    idMsg.textContent = '';
  } else {
    idMsg.style.color = 'red';
    idMsg.textContent = stateMsg.id.invalid;
    user.id = null;
  }
});

idButton.addEventListener('click', () => {
  if (user.id !== null) {
    inputId.style.color = 'green';
    inputId.textContent = stateMsg.id.success;
  } else {
    inputId.style.color = 'red';
    inputId.textContent = stateMsg.id.fail;
  }
});

/* user PW */

let pwVal = '',
  pwReVal = '',
  isPwValid = false;

function checkPwValid() {
  user.pw = null;
  if (pwReVal === '') {
    pwRetMsg.textContent = '';
  } else if (pwVal === pwReVal) {
    if (isPwValid === true) {
      user.pw = pwVal;
      pwRetMsg.style.color = 'green';
      pwRetMsg.textContent = stateMsg.pwRet.success;
    }
  } else {
    if (isPwValid !== false) {
      pwRetMsg.style.color = 'red';
      pwRetMsg.textContent = stateMsg.pwRet.fail;
    }
  }
}

const inputPw = document.querySelector('#pw input');
const pwMsg = document.querySelector('#pw .stateMsg');

inputPw.addEventListener('change', () => {
  const checkPw =
    /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/;
  pwVal = inputPw.value;
  if (checkPw.test(pwVal)) {
    isPwValid = true;
    pwMsg.textContent = '';
  } else if (pwVal === '') {
    pwMsg.textContent = '';
  } else {
    isPwValid = false;
    pwMsg.style.color = 'red';
    pwMsg.textContent = stateMsg.pw;
  }
  checkPwValid();
});

const inputPwRet = document.querySelector('#pwRet input');
const pwRetMsg = document.querySelector('#pwRet .stateMsg');

inputPwRet.addEventListener('change', () => {
  pwReVal = inputPwRet.value;
  checkPwValid();
});

/* user Name*/
const inputName = document.querySelector('#name');
inputName.addEventListener('change', () => {
  if (inputName.value !== '') user.name = inputName.value;
});

/* user Phone */
phone = ['', '', ''];
function checkPhoneValue() {
  if (phone[0] !== '' && phone[1] !== '' && phone[2] !== '') {
    user.phone = phone.join('-');
    phoneMsg.textContent = '';
  } else {
    user.phone = null;
  }
}

const phoneMsg = document.querySelector('.phone .stateMsg');
const inputPhone1 = document.querySelector('#phone1');
inputPhone1.addEventListener('change', () => {
  const checkNum = /^[0-9]{3}$/;
  if (checkNum.test(inputPhone1.value)) phone[0] = inputPhone1.value;
  else {
    phoneMsg.style.color = 'red';
    phoneMsg.textContent = stateMsg.phone;
  }
  checkPhoneValue();
});

const inputPhone2 = document.querySelector('#phone2');
inputPhone2.addEventListener('change', () => {
  const checkNum = /^[0-9]{4}$/;
  if (checkNum.test(inputPhone2.value)) phone[1] = inputPhone2.value;
  else {
    phoneMsg.style.color = 'red';
    phoneMsg.textContent = stateMsg.phone;
  }
  checkPhoneValue();
});

const inputPhone3 = document.querySelector('#phone3');
inputPhone3.addEventListener('change', () => {
  const checkNum = /^[0-9]{4}$/;
  if (checkNum.test(inputPhone3.value)) phone[2] = inputPhone3.value;
  else {
    phoneMsg.style.color = 'red';
    phoneMsg.textContent = stateMsg.phone;
  }
  checkPhoneValue();
});

/* user Email */

email = ['', ''];
function checkEmailValue() {
  if (email[0] !== '' && email[1] !== '') {
    user.email = email.join('@');
    emailMsg.textContent = '';
  } else {
    user.email = null;
  }
}

const emailMsg = document.querySelector('.email .stateMsg');
const inputEmail = document.querySelector('#email');
inputEmail.addEventListener('change', () => {
  const checkEmail = /^[a-zA-Z0-9]{4,20}$/;
  if (checkEmail.test(inputEmail.value)) email[0] = inputEmail.value;
  else {
    emailMsg.style.color = 'red';
    emailMsg.textContent = stateMsg.email;
  }
  checkEmailValue();
});

const inputDomain = document.querySelector('#domainTxt');
inputDomain.addEventListener('change', () => {
  email[1] = inputDomain.value;
  checkEmailValue();
});

const domainList = document.querySelector('#domainList');
domainList.addEventListener('change', () => {
  const selected = domainList.value;
  if (selected !== 'type') {
    inputDomain.value = selected;
    inputDomain.disabled = true;
    email[1] = selected;
  } else {
    inputDomain.value = '';
    inputDomain.disabled = false;
    email[1] = '';
  }
  checkEmailValue();
});

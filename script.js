// const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const buttonLogin = document.getElementById('button-login');
const buttonSubmit = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');
const counter = document.getElementById('counter');
const textarea = document.getElementById('textarea');
const main = document.getElementById('main');
const form = document.getElementById('evaluation-form');
const trybewartsFormLogo = document.getElementById('trybewarts-forms-logo');

function emailValidate() {
  const { value } = emailInput;
  if (value === 'tryber@teste.com') return true;
}

function passwordValidate() {
  const { value } = passwordInput;
  if (value === '123456') return true;
}

function loginValidation() {
  buttonLogin.addEventListener('click', () => {
    if (emailValidate() && passwordValidate()) {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  });
}

function buttonOnOff() {
  const { checked } = checkbox;
  if (!checked) {
    buttonSubmit.disabled = true;
    buttonSubmit.style.backgroundColor = 'rgb(117, 81, 154)';
  } else {
    buttonSubmit.disabled = false;
    buttonSubmit.style.backgroundColor = 'rebeccapurple';
  }
}

const counting = () => {
  const { value } = textarea;
  counter.innerText = (500 - value.length);
};

const runThroughElement = (array) => (
  [...array].reduce((result, { value }) => {
    result += `${value}, `;
    return result;
  }, ''));

const personInformationAdd = () => {
  const firstName = document.querySelector('#input-name').value;
  const lastName = document.querySelector('#input-lastname').value;
  const email = document.querySelector('#input-email').value;
  const house = document.querySelector('#house').value;
  const families = document.querySelector('#families input[name="family"]:checked').value;
  const content = document.querySelectorAll('#future-content input[name="content"]:checked');
  const rate = document.querySelector('input[name="rate"]:checked');

  const listContent = content.length > 1 ? runThroughElement(content) : content[0].value;
  return `
  <p>Nome: ${firstName} ${lastName}</p>
  <p>Email: ${email}</p>  <p>Casa: ${house}</p>
  <p>Família: ${families}</p>  <p>Matérias: ${listContent}</p>
  <p>Avaliação: ${rate.value}</p>  <p>Observações: ${textarea.value}</p>`;
};

const substituteElement = (evt) => {
  const element = document.createElement('section');
  element.id = 'form-data';
  element.innerHTML = personInformationAdd();
  main.appendChild(element);
  main.insertBefore(element, trybewartsFormLogo);
  form.style.display = 'none';
  evt.preventDefault();
};

function events() {
  checkbox.addEventListener('click', buttonOnOff);
  textarea.addEventListener('input', counting);
  buttonSubmit.addEventListener('click', substituteElement);
}

// chama function
loginValidation();
events();

window.onload = () => {
  buttonOnOff();
};

function submitEmail() {
  const clickEmail = document.getElementById('entrar');
  clickEmail.addEventListener('click', () => {
    const rightEmail = 'tryber@teste.com';
    const rightPassword = '123456';
    const valueEmail = document.querySelector('#email').value;
    const valuePassword = document.querySelector('#senha').value;
    if (rightEmail === valueEmail && rightPassword === valuePassword) {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  });
}submitEmail();

const checkbox = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');

function agreement() {
  submitBtn.disabled = !checkbox.checked;
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      submitBtn.disabled = false;
    }
  });
}agreement();

const textarea = document.querySelector('textarea');
const info = document.getElementById('counter');
const limite = 500;

function verificar() {
  const qtdcaracteres = this.value.length;
  const restantes = limite - qtdcaracteres;
  if (restantes < 1) {
    this.value = this.value.slice(0, limite);
    info.innerHTML = 0;
  }
  info.innerHTML = restantes;
}
textarea.addEventListener('keyup', verificar);

const nam = document.getElementById('input-name');
const lastName = document.getElementById('input-lastname');
const email = document.getElementById('input-email');
const house = document.querySelector('#house');
const family = document.querySelectorAll('.div-radio');
const content = document.querySelectorAll('.subject');
const rate = document.querySelectorAll('.input-value');
const obs = document.getElementById('textarea');
const ul = document.querySelector('ul');

function getFullName() {
  return `${nam.value} ${lastName.value}`;
}

function getEmail() {
  return email.value;
}

function getHouse() {
  return house.options[house.selectedIndex].value;
}

function getFamily() {
  for (let index = 0; index < family.length; index += 1) {
    if (family[index].checked) {
      return family[index].value;
    }
  }
}

function getContent() {
  const valuesContent = [];
  for (let index = 0; index < content.length; index += 1) {
    if (content[index].checked) {
      valuesContent.push(` ${content[index].value}`);
    }
  }
  return valuesContent;
}

function getRate() {
  for (let index = 0; index < rate.length; index += 1) {
    if (rate[index].checked) {
      return rate[index].value;
    }
  }
}

function getObs() {
  return obs.value;
}

const pName = document.createElement('p');
const pEmail = document.createElement('p');
const pHouse = document.createElement('p');
const pFamily = document.createElement('p');
const pContent = document.createElement('p');
const pRate = document.createElement('p');
const pObs = document.createElement('p');
const li = document.createElement('li');

function newForm() {
  // e.preventDefault();
  pName.innerText = `Nome: ${getFullName()}`;
  pEmail.innerText = `Email: ${getEmail()}`;
  pHouse.innerText = `Casa: ${getHouse()}`;
  pFamily.innerText = `Família: ${getFamily()}`;
  pContent.innerText = `Matérias: ${getContent()}`;
  pRate.innerText = `Avaliação: ${getRate()}`;
  pObs.innerText = `Observações: ${getObs()}`;

  li.appendChild(pName);
  li.appendChild(pEmail);
  li.appendChild(pHouse);
  li.appendChild(pFamily);
  li.appendChild(pContent);
  li.appendChild(pRate);
  li.appendChild(pObs);
  ul.appendChild(li);
}
submitBtn.addEventListener('click', () => {
  newForm();
  const evaluationForm = document.getElementById('evaluation-form');
  evaluationForm.style.display = 'none';
});

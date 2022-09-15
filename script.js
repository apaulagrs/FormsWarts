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

function agreement() {
  const checkbox = document.getElementById('agreement');
  const submitBtn = document.getElementById('submit-btn');
  submitBtn.addEventListener('click', (event) => {
    if (checkbox.checked === false) {
      event.preventDefault();
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

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

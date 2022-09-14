function submitEmail() {
  const clickEmail = document.getElementById('entrar');
  clickEmail.addEventListener('click', () => {
    const rightEmail = 'tryber@teste.com';
    const rightPassword = '123456'
    const valueEmail = document.querySelector('#email').value;
    const valuePassword = document.querySelector('#senha').value;
    if (rightEmail === valueEmail && rightPassword === valuePassword) {
        alert('Olá, Tryber!');
    } else {
        alert('Email ou senha inválidos.')
    }
  })
}submitEmail();
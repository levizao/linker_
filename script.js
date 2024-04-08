document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // prevent form submission
  var password = document.getElementById('password').value;
  if (password === 'test') {
    // Define a sessão como ativa e define o tempo de sessão
    sessionStorage.setItem('loggedIn', true);
    sessionStorage.setItem('sessionTime', 10);
    window.location.href = 'hello/hello.html'; // redirecionar para hello.html
  } else {
    alert('Senha incorreta!'); // exibir alerta para senha incorreta
  }
});

// Verificar se a sessão está ativa
var loggedIn = sessionStorage.getItem('loggedIn');

// Se não estiver logado, redirecionar para a página de login
if (!loggedIn) {
  window.location.href = '../index.html'; // Redirecionar para a página de login
}

// Iniciar ou continuar o timer de sessão
var sessionTime = sessionStorage.getItem('sessionTime');

function updateSessionTimer() {
  var sessionTimerElement = document.getElementById('sessionTimer');

  if (sessionTime <= 0) {
    // Redirecionar para a página de login e encerrar a sessão
    sessionStorage.removeItem('loggedIn');
    sessionStorage.removeItem('sessionTime');
    window.location.href = '../index.html';
    return;
  }

  sessionTimerElement.textContent = "Sessão será encerrada em " + sessionTime + " segundos";

  // Atualizar o timer a cada segundo
  sessionTime--;
  sessionStorage.setItem('sessionTime', sessionTime);
  setTimeout(updateSessionTimer, 1000);
}

// Iniciar ou continuar o timer de sessão
updateSessionTimer();

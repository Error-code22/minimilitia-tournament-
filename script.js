// Dynamic Section Loading
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        document.querySelectorAll('section').forEach(section => {
            section.classList.add('hidden');
            section.classList.remove('active');
        });
        document.getElementById(targetId).classList.add('active');
        document.getElementById(targetId).classList.remove('hidden');
    });
});

// Interactive Background
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    const color1 = '#2E1A47'; // Midnight purple
    const color2 = '#1A2E47'; // Midnight blue
    document.body.style.background = `linear-gradient(${x * 360}deg, ${color1}, ${color2})`;
});

// Password Visibility Toggle
document.getElementById('toggle-login-password').addEventListener('click', () => {
    const passwordInput = document.getElementById('login-password');
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
});

document.getElementById('toggle-signup-password').addEventListener('click', () => {
    const passwordInput = document.getElementById('signup-password');
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
});

// Tournament Timer
const countdownElement = document.getElementById('countdown');
const tournamentTime = new Date();
tournamentTime.setHours(tournamentTime.getHours() + 2); // Set tournament time to 2 hours from now

function updateTimer() {
    const now = new Date();
    const diff = tournamentTime - now;

    if (diff <= 0) {
        countdownElement.textContent = 'Tournament Started!';
        return;
    }

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    countdownElement.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

setInterval(updateTimer, 1000);
updateTimer();

// Chat Functionality
const chatInput = document.getElementById('chat-input');
const sendButton = document.getElementById('send-button');
const messages = document.getElementById('messages');

sendButton.addEventListener('click', () => {
    const message = chatInput.value.trim();
    if (message) {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        messages.appendChild(messageElement);
        chatInput.value = '';
        messages.scrollTop = messages.scrollHeight;
    }
});
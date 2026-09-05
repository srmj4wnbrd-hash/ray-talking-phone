// Simple Ray - No API needed!
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

const RAY_NAME = 'ray';
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const statusEl = document.getElementById('status');
const messagesEl = document.getElementById('messages');
const textInput = document.getElementById('textInput');
const sendBtn = document.getElementById('sendBtn');
const mouth = document.getElementById('mouth');
const leftPupil = document.querySelector('.left-eye .pupil');
const rightPupil = document.querySelector('.right-eye .pupil');

let isListening = false;

// Simple responses for Ray
const responses = {
    'hello': 'Hi there! How can I help you?',
    'hi': 'Hey! What can I do for you?',
    'how are you': 'I\'m doing great! Thanks for asking!',
    'what is your name': 'My name is Ray! Nice to meet you!',
    'who are you': 'I\'m Ray, your AI talking phone!',
    'joke': 'Why did the AI go to school? Because it wanted to improve its learning model! 😄',
    'tell me a joke': 'Why did the AI go to school? Because it wanted to improve its learning model! 😄',
    'time': new Date().toLocaleTimeString(),
    'date': new Date().toLocaleDateString(),
    'what time is it': new Date().toLocaleTimeString(),
    'what is the date': new Date().toLocaleDateString(),
    'goodbye': 'Bye! See you later!',
    'bye': 'Goodbye! Have a great day!',
    'thanks': 'You\'re welcome!',
    'thank you': 'You\'re welcome!',
    'help': 'You can ask me questions! Try "Ray, tell me a joke" or "Ray, what time is it?"',
    'default': 'That\'s interesting! Can you tell me more?'
};

// Speech Recognition Setup
recognition.continuous = false;
recognition.interimResults = true;
recognition.lang = 'en-US';

// Button Events
startBtn.addEventListener('click', () => {
    messagesEl.innerHTML = '';
    recognition.start();
});

stopBtn.addEventListener('click', () => {
    recognition.stop();
});

sendBtn.addEventListener('click', () => {
    const text = textInput.value.trim();
    if (text) {
        handleInput(text);
        textInput.value = '';
    }
});

textInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendBtn.click();
    }
});

// Speech Recognition Events
recognition.onstart = () => {
    isListening = true;
    statusEl.textContent = 'Listening...';
    statusEl.classList.add('listening');
    startBtn.disabled = true;
};

recognition.onend = () => {
    isListening = false;
    statusEl.classList.remove('listening');
    startBtn.disabled = false;
    statusEl.textContent = 'Say "Ray"...';
};

recognition.onresult = (event) => {
    let transcript = '';
    for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
    }
    if (event.results[event.results.length - 1].isFinal) {
        handleInput(transcript);
    }
};

recognition.onerror = (event) => {
    addMessage('Error: ' + event.error, 'ray');
};

// Handle User Input
function handleInput(userText) {
    const cleanedText = userText.toLowerCase().trim();
    addMessage(userText, 'user');
    
    if (cleanedText.includes(RAY_NAME)) {
        // Ray's name was mentioned!
        animateEyes();
        const command = cleanedText.replace(RAY_NAME, '').trim();
        
        if (command) {
            respondToCommand(command);
        } else {
            respondToCommand('hello');
        }
    } else {
        // Ray name not mentioned - silent
        addMessage('(Ray is silent - waiting to be called)', 'ray');
    }
    
    // Restart listening
    if (isListening) {
        setTimeout(() => {
            recognition.start();
        }, 1000);
    }
}

// Find and respond to command
function respondToCommand(command) {
    statusEl.textContent = 'Ray is thinking...';
    statusEl.classList.add('speaking');
    
    let response = responses['default'];
    
    // Check for keyword matches
    for (let key in responses) {
        if (command.includes(key)) {
            response = responses[key];
            break;
        }
    }
    
    setTimeout(() => {
        addMessage(response, 'ray');
        speakText(response);
    }, 500);
}

// Text-to-Speech
function speakText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    utterance.pitch = 1.2;
    utterance.volume = 1;
    
    utterance.onstart = () => {
        animateMouth();
    };
    
    utterance.onend = () => {
        statusEl.textContent = 'Say "Ray"...';
        statusEl.classList.remove('speaking');
        mouth.classList.remove('talking');
    };
    
    window.speechSynthesis.speak(utterance);
}

// Animations
function animateEyes() {
    const interval = setInterval(() => {
        const x = Math.random() * 15 - 7.5;
        const y = Math.random() * 15 - 7.5;
        leftPupil.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
        rightPupil.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    }, 200);
    
    setTimeout(() => clearInterval(interval), 1500);
}

function animateMouth() {
    mouth.classList.add('talking');
}

// Add message to chat
function addMessage(text, sender) {
    const div = document.createElement('div');
    div.className = `message ${sender}`;
    div.textContent = text;
    messagesEl.appendChild(div);
    messagesEl.scrollTop = messagesEl.scrollHeight;
}

// Welcome
window.addEventListener('load', () => {
    addMessage('Hi! I\'m Ray. Say my name to talk to me! 😊', 'ray');
});

// Mouse tracking for eyes (optional)
document.addEventListener('mousemove', (e) => {
    [leftPupil, rightPupil].forEach(pupil => {
        const eye = pupil.parentElement;
        const rect = eye.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
        const distance = 6;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        pupil.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    });
});
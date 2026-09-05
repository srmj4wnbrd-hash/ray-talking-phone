// Speech Recognition Setup
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// Configuration
const RAY_NAME = 'Ray'.toLowerCase();
const API_KEY = 'sk-proj-YOUR_API_KEY_HERE'; // Replace with your OpenAI API key

// DOM Elements
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const statusEl = document.getElementById('status');
const transcriptEl = document.getElementById('transcript');
const mouth = document.getElementById('mouth');
const leftPupil = document.querySelector('.left-eye .pupil');
const rightPupil = document.querySelector('.right-eye .pupil');

// State
let isListening = false;
let isWaitingForCommand = false;

// Speech Recognition Configuration
recognition.continuous = false;
recognition.interimResults = true;
recognition.lang = 'en-US';

// Event Listeners
startBtn.addEventListener('click', startListening);
stopBtn.addEventListener('click', stopListening);

recognition.onstart = () => {
    isListening = true;
    statusEl.textContent = 'Listening...';
    statusEl.classList.add('active');
    startBtn.disabled = true;
};

recognition.onend = () => {
    isListening = false;
    statusEl.classList.remove('active');
    startBtn.disabled = false;
};

recognition.onresult = (event) => {
    let transcript = '';
    let isFinal = false;

    for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
        isFinal = event.results[i].isFinal;
    }

    if (isFinal) {
        handleUserInput(transcript);
    }
};

recognition.onerror = (event) => {
    addMessage(`Error: ${event.error}`, 'error');
    statusEl.textContent = 'Error occurred';
};

// Core Functions
function startListening() {
    transcriptEl.innerHTML = '';
    recognition.start();
}

function stopListening() {
    recognition.stop();
}

function handleUserInput(userSpeech) {
    const cleanedSpeech = userSpeech.trim().toLowerCase();
    addMessage(`You: ${userSpeech}`, 'user');

    if (cleanedSpeech.includes(RAY_NAME)) {
        // Ray's name was mentioned
        animateEyes();
        const commandAfterName = cleanedSpeech.replace(RAY_NAME, '').trim();

        if (commandAfterName.length > 0) {
            processCommand(commandAfterName);
        } else {
            speakResponse('Yes? How can I help you?');
        }
    } else {
        // Ray's name was not mentioned
        addMessage('Ray: (silent - waiting for name to be called)', 'ray');
    }

    // Restart listening
    setTimeout(() => {
        recognition.start();
    }, 1000);
}

function processCommand(command) {
    statusEl.textContent = 'Processing...';
    statusEl.classList.add('responding');

    // Generate response using OpenAI API
    generateResponse(command);
}

async function generateResponse(userCommand) {
    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: 'gpt-3.5-turbo',
            messages: [{
                role: 'system',
                content: 'You are Ray, an AI talking phone with a friendly personality. Keep responses short and conversational (under 30 words). Be helpful and witty.'
            },
            {
                role: 'user',
                content: userCommand
            }],
            max_tokens: 100,
            temperature: 0.7
        }, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        const rayResponse = response.data.choices[0].message.content;
        speakResponse(rayResponse);
    } catch (error) {
        console.error('API Error:', error);
        if (error.response?.status === 401) {
            addMessage('Ray: Please add your OpenAI API key to use this feature!', 'error');
            speakResponse('Please add your Open AI API key to use this feature');
        } else {
            addMessage('Ray: I encountered an error. Please try again.', 'error');
            speakResponse('I encountered an error. Please try again.');
        }
    }
}

function speakResponse(text) {
    // Text-to-Speech
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    utterance.pitch = 1.2;
    utterance.volume = 1;

    utterance.onstart = () => {
        statusEl.textContent = 'Ray is Speaking...';
        mouth.classList.add('speaking');
        animateMouth();
    };

    utterance.onend = () => {
        statusEl.textContent = 'Listening for "Ray"...';
        statusEl.classList.remove('responding');
        mouth.classList.remove('speaking');
    };

    addMessage(`Ray: ${text}`, 'ray');
    window.speechSynthesis.speak(utterance);
}

// Animation Functions
function animateEyes() {
    const moveEyes = setInterval(() => {
        const randomX = Math.random() * 20 - 10;
        const randomY = Math.random() * 20 - 10;
        leftPupil.style.transform = `translate(calc(-50% + ${randomX}px), calc(-50% + ${randomY}px))`;
        rightPupil.style.transform = `translate(calc(-50% + ${randomX}px), calc(-50% + ${randomY}px))`;
    }, 200);

    setTimeout(() => clearInterval(moveEyes), 2000);
}

function animateMouth() {
    const mouthAnimation = setInterval(() => {
        const randomHeight = Math.random() * 30 + 10;
        mouth.style.height = randomHeight + 'px';
    }, 100);

    setTimeout(() => {
        clearInterval(mouthAnimation);
        mouth.style.height = '20px';
    }, 3000);
}

function addMessage(message, type) {
    const messageEl = document.createElement('div');
    messageEl.className = `message ${type}`;
    messageEl.textContent = message;
    transcriptEl.appendChild(messageEl);
    transcriptEl.scrollTop = transcriptEl.scrollHeight;
}

// Mouse tracking for eyes
document.addEventListener('mousemove', (e) => {
    const eyes = [leftPupil, rightPupil];
    eyes.forEach(pupil => {
        const eye = pupil.parentElement;
        const eyeRect = eye.getBoundingClientRect();
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;

        const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
        const distance = 8;
        const pupilX = Math.cos(angle) * distance;
        const pupilY = Math.sin(angle) * distance;

        pupil.style.transform = `translate(calc(-50% + ${pupilX}px), calc(-50% + ${pupilY}px))`;
    });
});

// Welcome message
window.addEventListener('load', () => {
    addMessage('Ray: Hi! I\'m Ray, your AI talking phone. Say my name to get my attention!', 'ray');
});
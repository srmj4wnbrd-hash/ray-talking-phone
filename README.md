# Ray - AI Talking Phone 📞🤖

An interactive AI-powered talking phone with a friendly face, animated mouth, and voice recognition. Ray responds only when you say his name!

## Features

✨ **Smart Voice Recognition** - Ray only responds when you call his name

👁️ **Animated Face** - Watch Ray's eyes follow your mouse and his mouth animate when speaking

🎤 **Speech-to-Text** - Say your commands naturally using the Web Speech API

🔊 **Text-to-Speech** - Ray speaks back to you with realistic audio

🧠 **AI-Powered** - Uses OpenAI's GPT-3.5 Turbo for intelligent responses

💬 **Conversation History** - Keeps track of your chat history

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/srmj4wnbrd-hash/ray-talking-phone.git
cd ray-talking-phone
```

### 2. Set Up Your OpenAI API Key

1. Get your API key from [OpenAI Platform](https://platform.openai.com/api-keys)
2. Open `script.js`
3. Replace `'sk-proj-YOUR_API_KEY_HERE'` with your actual API key:
```javascript
const API_KEY = 'sk-proj-your-actual-key-here';
```

### 3. Run the Application

- Open `index.html` in your web browser
- Or use a local server:
```bash
python -m http.server 8000
# Then navigate to http://localhost:8000
```

## How to Use

1. **Click "Start Listening"** to begin
2. **Say "Ray" followed by your command**, for example:
   - "Ray, what's the weather like?"
   - "Ray, tell me a joke"
   - "Ray, what time is it?"
3. **Ray will respond** with speech and animations
4. The conversation will appear in the transcript box

## Browser Requirements

- Chrome, Edge, Firefox, or Safari (recent versions)
- Microphone access
- Speakers for audio output
- JavaScript enabled

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Speech Recognition**: Web Speech API (Native Browser API)
- **Text-to-Speech**: Web Speech API (Native Browser API)
- **AI Backend**: OpenAI GPT-3.5 Turbo API
- **HTTP Client**: Axios

## Project Structure

```
ray-talking-phone/
├── index.html          # Main HTML structure
├── styles.css          # Styling and animations
├── script.js           # Core functionality and AI integration
└── README.md           # Documentation
```

## Customization

### Change Ray's Personality
Edit the system message in `script.js`:
```javascript
content: 'You are Ray, an AI talking phone with a friendly personality...'
```

### Adjust Voice Settings
Modify the speech synthesis properties:
```javascript
utterance.rate = 1;        // Speed (0.1 to 10)
utterance.pitch = 1.2;     // Pitch (0 to 2)
utterance.volume = 1;      // Volume (0 to 1)
```

### Change Ray's Name
Update the constant in `script.js`:
```javascript
const RAY_NAME = 'Ray'.toLowerCase();
```

## Cost Considerations

⚠️ **Important**: Using the OpenAI API will incur costs based on tokens used. Each message typically costs $0.0005 - $0.001 USD.

- Monitor your API usage at [OpenAI Usage Dashboard](https://platform.openai.com/account/usage/overview)
- Set usage limits in your OpenAI account settings
- Test with short messages to minimize costs

## Troubleshooting

### Ray doesn't respond?
1. Ensure your OpenAI API key is correct
2. Check that you said "Ray" before your command
3. Check browser console for errors (F12)
4. Verify microphone permissions are granted

### Speech recognition not working?
1. Use a compatible browser (Chrome/Edge recommended)
2. Ensure you have microphone access
3. Check that the site is running on localhost or HTTPS

### Audio not playing?
1. Check browser volume settings
2. Verify speaker is connected and enabled
3. Check browser console for TTS errors

## Future Enhancements

- [ ] Add voice selection options
- [ ] Implement chat memory for context-aware responses
- [ ] Add custom wake words
- [ ] Support multiple languages
- [ ] Add emotion-based animations
- [ ] Implement local AI alternatives (Ollama, etc.)
- [ ] Add voice recording and playback
- [ ] Create mobile app version

## License

MIT License - Feel free to use this project for personal or commercial purposes

## Support

For issues or feature requests, please open a GitHub issue on the [repository](https://github.com/srmj4wnbrd-hash/ray-talking-phone/issues).

---

**Made with ❤️ by Ray - Your AI Talking Phone**
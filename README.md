# Ray - AI Talking Phone 📱🤖

An interactive AI-powered talking phone with a friendly face, animated mouth, and voice recognition. **Now available as a PWA (Progressive Web App) - Install it on any device!**

## ✨ Features

🎤 **Voice Recognition** - Say "Ray" to activate
📱 **Install as App** - Add to your home screen or taskbar
😊 **Animated Face** - Watch Ray's eyes and mouth animate
🔊 **Text-to-Speech** - Ray speaks back to you
💬 **Text & Voice Chat** - Use voice OR type your messages
⚡ **Works Offline** - Service Worker enables offline functionality
🎨 **Beautiful UI** - Modern design with gradients and animations

## 🚀 Quick Start

### Option 1: Use Online (Recommended)
1. Open: https://srmj4wnbrd-hash.github.io/ray-talking-phone/
2. Look for the **"📱 Install Ray as an app!"** popup at the bottom
3. Click **Install**
4. Ray will appear on your home screen or app drawer!

### Option 2: Use Locally
1. Clone the repo:
   ```bash
   git clone https://github.com/srmj4wnbrd-hash/ray-talking-phone.git
   cd ray-talking-phone
   ```

2. Start a local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js (with http-server)
   npx http-server
   ```

3. Open `http://localhost:8000` in your browser

## 💬 How to Use Ray

### Via Voice:
1. Click **"🎤 Start"** button
2. Say **"Ray"** followed by your command, like:
   - "Ray, hello"
   - "Ray, tell me a joke"
   - "Ray, what time is it?"
   - "Ray, who are you?"

### Via Text:
1. Type your message in the text box (include "Ray" in it)
2. Click **Send**
3. Ray will respond!

## 📥 Installing as an App

### On Desktop (Windows/Mac/Linux):
1. Visit https://srmj4wnbrd-hash.github.io/ray-talking-phone/
2. Look for the install button or the "📱 Install Ray as an app!" prompt
3. Click **Install**
4. Ray appears in your Applications/Start Menu

### On Mobile (iPhone/Android):
**Android:**
1. Tap the three-dot menu (⋮) or look for an install prompt
2. Tap "Install app" or "Add to Home Screen"
3. Tap "Install"
4. Ray icon appears on your home screen!

**iPhone:**
1. Tap the Share button at the bottom
2. Tap "Add to Home Screen"
3. Tap "Add"
4. Ray icon appears on your home screen!

## 🎯 What Ray Can Do

- **Greetings**: "Hello", "Hi", "Goodbye"
- **Identity**: "Who are you?", "What's your name?"
- **Entertainment**: "Tell me a joke"
- **Time**: "What time is it?"
- **Date**: "What's the date?"
- **Help**: "Help"
- **General chat**: Any other message!

## 📁 Project Structure

```
ray-talking-phone/
├── index.html          # Main app file with PWA support
├── styles.css          # Styling and animations
├── simple-script.js    # Core functionality
├── manifest.json       # PWA manifest (for installation)
├── sw.js              # Service Worker (offline support)
├── README.md          # Documentation
└── .gitignore         # Git ignore file
```

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **PWA**: Service Workers, Web App Manifest
- **Speech**: Web Speech API (Voice Recognition & Text-to-Speech)
- **Storage**: Browser Cache API (Service Worker)

## 🌐 Browser Support

✅ Chrome/Edge (Desktop & Android) - **Best PWA support**
✅ Safari (Desktop & iOS)
✅ Firefox (Desktop & Android)
✅ Brave, Opera, and other Chromium browsers

## ⚙️ Customization

### Change Ray's Name:
Edit `simple-script.js`:
```javascript
const RAY_NAME = 'ray'; // Change 'ray' to any name
```

### Add More Responses:
Edit `simple-script.js` in the `responses` object:
```javascript
const responses = {
    'your question': 'Your answer here',
    'hello': 'Hi there! How can I help you?',
    // Add more...
};
```

### Change Voice Settings:
```javascript
utterance.rate = 1;   // Speed (0.1 to 10)
utterance.pitch = 1.2; // Pitch (0 to 2)
utterance.volume = 1;  // Volume (0 to 1)
```

## 🎨 Styling

Edit `styles.css` to customize:
- Colors (gradients, accent colors)
- Phone size and design
- Font sizes and styles
- Animations

## 🔧 Troubleshooting

### Ray doesn't respond?
- Make sure you said "Ray" before your command
- Check that your microphone permissions are allowed
- Refresh the page
- Try a different browser

### Install button doesn't appear?
- The page must be served over HTTPS (GitHub Pages is HTTPS by default ✓)
- Your browser must support PWA installation
- Try using Chrome or Edge for best results
- On iOS, use "Add to Home Screen" instead

### Voice recognition not working?
- Use Chrome, Edge, or another Chromium browser
- Grant microphone permissions when prompted
- Check that your microphone is connected
- Make sure you have internet connection

### No audio output?
- Ensure speakers are connected and volume is on
- Check browser volume settings
- Try a different browser
- On mobile, make sure device volume is on

## 📱 Mobile App Features

✨ **Works Offline** - All cached content loads without internet
✨ **App Icon** - Appears on home screen with custom icon
✨ **Full Screen** - Launches in standalone mode (no browser UI)
✨ **Fast** - Pre-cached files load instantly
✨ **Native Feel** - Acts like a real app!

## 🚀 Future Enhancements

- [ ] Multiple voice options
- [ ] Conversation memory
- [ ] Custom wake words
- [ ] Multi-language support
- [ ] More animations and reactions
- [ ] Dark/Light theme toggle
- [ ] Settings page
- [ ] Chat export
- [ ] Push notifications

## 📜 License

MIT License - Free to use, modify, and distribute!

## 🤝 Contributing

Found a bug or have a feature request? Open an issue on GitHub!

---

**Made with ❤️ by Ray - Your AI Talking Phone**

📱 Install Ray today and take your AI assistant everywhere!

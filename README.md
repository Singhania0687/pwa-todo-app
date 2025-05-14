# 🌐 Web Service App (PWA + Web Worker)

This project demonstrates a simple **Progressive Web App (PWA)** that:

- Uses a **Service Worker** to cache essential assets for offline access.
- Uses a **Web Worker** to handle computational tasks (like summing numbers) in the background without blocking the UI.

---

## 🚀 Features

- ✅ Caches files on install using a Service Worker (`sw.js`)
- ⚙️ Handles computation (e.g., summing large numbers) using a Web Worker (`worker.js`)
- 📱 Works offline (thanks to PWA support)
- 🧠 UI remains responsive during background tasks
- 💻 Compatible with macOS + modern browsers (Chrome, Firefox, Edge)

---

## 📁 Project Structure

web-service-app/<br>
├── index.html # Main HTML file<br>
├── main.js # JS for UI + Web Worker integration<br>
├── sw.js # Service Worker<br>
├── worker.js # Web Worker (runs in background thread)<br>
└── manifest.json # PWA manifest (optional)<br>


---

## 🔧 How to Run (macOS)

### Option 1: Use Python 3 HTTP Server

```bash
cd web-service-app
python3 -m http.server 8000
Then open: http://localhost:8000

Make sure to use a local server (not file://) for service workers to register.
🧠 How It Works

🛠️ Service Worker (sw.js)
Intercepts fetch events.
Caches key assets on install.
Serves cached files when offline.

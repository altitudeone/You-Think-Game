> *"Don't seek the answer here. See with your brain."*

A lightweight, interactive Web Application designed to test personal reasoning, moral dilemmas, and situational logic. Built with **Google Apps Script** and powered by **Google Gemini API**, this application acts as a "logic mirror"—reflecting and validating the implicit consequences of a user's decisions without judgment or unsolicited advice.

---

## ✨ Features

- **Infinite & Varied Dilemmas:** Packed with curated scenarios spanning Psychology, Power Dynamics, Social Ethics, and Career Decisions.
- **One-Shot Validation Logic:** Uses Gemini API to deliver concise, non-judgmental, and critically validated reflections (prevents API spam & preserves system performance).
- **Dynamic UI Locking:** Automatically locks input and disables retry buttons after each turn to enforce deep reflection over continuous chatting.
- **Anti-Repetition Scenario Engine:** Ensures unique scenario generation upon every session reset.
- **Minimalist & Modern Dark Theme:** Designed for sleek, distraction-free decision making.

---

## 🛠️ Built With

- **Frontend:** HTML5, CSS3, JavaScript (ES6)
- **Backend:** Google Apps Script (`Code.gs`)
- **AI Engine:** Google Gemini API (`gemini-3.8-flash`)

---

## 🚀 Getting Started

### Prerequisites
1. A Google Account to access [Google Apps Script](https://script.google.com/).
2. A free API Key from [Google AI Studio](https://aistudio.google.com/).

### Installation & Deployment

1. **Create a Google Apps Script Project:**
   - Go to [script.google.com](https://script.google.com/) and create a **New Project**.

2. **Backend Setup (`Code.gs`):**
   - Copy the contents of `Code.gs` from this repository into your Apps Script editor.
   - Replace `"MASUKKAN_API_KEY_LU_DI_SINI"` with your actual Gemini API Key.

3. **Frontend Setup (`Index.html`):**
   - Click **+ (Add a file)** in Apps Script and choose **HTML**. Name it `Index`.
   - Copy the contents of `Index.html` into this file.

4. **Deploy as Web App:**
   - Click **Deploy** > **New deployment**.
   - Select **Web app** as the deployment type.
   - Set **Execute as:** `Me`.
   - Set **Who has access:** `Anyone`.
   - Click **Deploy** and copy your generated Web App URL.

---

## 📖 How It Works

1. The app presents a random, high-stakes situational case/dilemma.
2. The user types their reasoning or action plan.
3. The app queries Gemini API to generate a brief, logical implication of the user's answer.
4. Once validated, the response is locked with a "Mic Drop" philosophy, encouraging self-reflection before moving to the next case.

---

## 🏷️ Credit & Branding

Crafted with passion by **WaktuLuangProject**.

<img src="https://github.com/user-attachments/assets/864d82d6-c29b-40a2-a9ce-df6ffcd12682" alt="Logic Mirror Game Preview" width="100%">



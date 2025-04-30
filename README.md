# ⚡ FutureBite: A Cyberpunk Restaurant Website
## Developer: Justin K

Welcome to **FutureBite**, a neon-lit, cyberpunk-themed restaurant website from the distant future. This project showcases extinct foods like burgers, hotdogs, fries, and donuts in a world where such meals are a nostalgic luxury. Designed using **HTML, CSS, and JavaScript**, and bundled with **Webpack**, the site demonstrates dynamic content loading using a modular JavaScript architecture.

---

## 🚀 Features

- 🔀 Tabbed navigation: `Home`, `Menu`, and `Contact` sections.
- 🧠 Smart DOM update: Clears and replaces content dynamically based on selected tab.
- 🎨 Futuristic cyberpunk aesthetic.
- ⚙️ Webpack-powered build and development setup.
- 📦 Package-managed with npm.

---

## 🛠️ Technologies Used

- HTML5  
- CSS3  
- JavaScript (ES5/ES6)  
- Webpack  
- npm  

---

## 🧩 How It Works

- The site uses a **modular architecture** with separate JavaScript files for each tab (`home`, `menu`, and `contactUs`).
- The navigation buttons listen for click events and **dynamically update** the content by clearing and replacing the inner HTML of the `#content` container.
- All scripts and styles are bundled using Webpack.
- A development server is set up using `webpack-dev-server`.

---

## 📦 Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/spammusubii/Restaurant-Page.git
    ```
2. Navigate into project directory:
    ```bash
    cd Restaurant-Page
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Run local development server with hot reloading:
    ```bash
    npx webpack serve
    ```
5. Bundle project for production deployment:
    ```bash
    npx webpack --mode production
    ```
# 🎵 Ad-Free Spotify Clone

A seamless, high-performance music streaming platform inspired by Spotify—without ads and optimized for a smoother user experience.

## 🚀 Features
- **Ad-Free Streaming** – Enjoy uninterrupted music.
- **Blazing Fast Performance** – Optimized for speed and efficiency.
- **Modern UI/UX** – Intuitive and sleek design.
- **Personalized Playlists** – Create and manage your music collection effortlessly.
- **Offline Mode** – Listen to your favorite tracks without an internet connection.

## 🛠️ Tech Stack
- **Frontend:** React.js with Tailwind CSS
- **Backend:** Node.js with Express.js
- **Database:** MongoDB
- **Authentication:** Firebase
- **Audio Streaming:** Web Audio API

## 📂 Project Structure
### Front-End
- React.js with Tailwind CSS for a modern and responsive UI.
- Uses React Router for navigation and Axios for API calls.

### Back-End
- Node.js with Express.js for handling API requests.
- MongoDB as the database for storing user data and playlists.
- Firebase authentication for secure login and user management.

### Audio Streaming
- Utilizes Web Audio API for seamless and high-quality playback.

## 📦 Installation
### Step 1: Set Up the Project
#### 1.1 Initialize the Project
Create a new directory for your project and initialize it with npm:
```bash
mkdir ad-free-spotify-clone
cd ad-free-spotify-clone
npm init -y
```

#### 1.2 Set Up the Front-End
Create a new React app:
```bash
npx create-react-app client
cd client
npm install axios react-router-dom tailwindcss
```

#### 1.3 Set Up the Back-End
Create a new directory for the back-end and initialize it with npm:
```bash
mkdir server
cd server
npm init -y
npm install express mongoose cors dotenv
```

### Step 2: Front-End Development
#### 2.1 Set Up Tailwind CSS
Create a `tailwind.config.js` file in the `client` directory:
```javascript
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```

Create a `postcss.config.js` file in the `client` directory:
```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

Update the `src/index.css` file to include Tailwind CSS:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### 2.2 Create Authentication Components
Create a `Login.js` and `Register.js` component in the `client/src` directory:
```javascript
// Login.js
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const response = await axios.post('http://localhost:5000/login', { username, password });
    localStorage.setItem('token', response.data.token);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        <input type="text" placeholder="Username" className="w-full p-2 border rounded mb-2" onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" className="w-full p-2 border rounded mb-2" onChange={(e) => setPassword(e.target.value)} />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
```

## 🎯 Future Enhancements
- AI-powered music recommendations
- Social features (share playlists, follow friends)
- Cross-platform support (Web, iOS, Android)

## 📜 License
This project is open-source and available under the MIT License.

## 🤝 Contributing
We welcome contributions! Feel free to fork the repo, create a new branch, and submit a PR.

## 📬 Contact
For queries or collaborations, reach out at [sj19791980@gmail.com](mailto:sj19791980@gmail.com).


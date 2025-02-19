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
// src/components/Login.js
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
```javascript
// src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    await axios.post('http://localhost:5000/register', { username, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl mb-4">Register</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <button onClick={handleRegister} className="w-full p-2 bg-blue-500 text-white rounded">
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
```

## Step 2: Front-End Development

### 2.1 Set Up Tailwind CSS
Create `tailwind.config.js` and `postcss.config.js` with Tailwind CSS setup.

### 2.2 Create Authentication Components
Create `Login.js` and `Register.js` in the `client/src/components` directory.

### 2.3 Set Up Routing
Implement React Router in `App.js`.

## Step 3: Back-End Development

### 3.1 Create the Server
Create `server.js` in the `server` directory:
```javascript
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### 3.2 Create User Model
Create `User.js` in the `server/models` directory:
```javascript
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
const User = mongoose.model('User', UserSchema);
module.exports = User;
```

### 3.3 Create Authentication Routes
Create `auth.js` in the `server/routes` directory:
```javascript
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashedPassword });
  await user.save();
  res.send('User registered');
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user && await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.send({ token });
  } else {
    res.status(401).send('Invalid credentials');
  }
});

module.exports = router;
```

### 3.4 Environment Variables
Create a `.env` file in the `server` directory:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## Step 4: Run the Project

### 4.1 Start the Back-End Server
```bash
cd server
node server.js
```

### 4.2 Start the Front-End Server
```bash
cd client
npm start
```

## Step 5: Expand the Project
- **Music Upload and Playback**: Implement AWS S3 for music file storage.
- **User Profiles**: Store favorite songs, playlists, etc.
- **Recommendations**: Implement a recommendation system.
- **Search Functionality**: Add search for songs, artists, and playlists.
- **Offline Mode**: Use service workers or local storage for offline playback.

## Additional Resources
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [AWS S3 Documentation](https://docs.aws.amazon.com/s3/index.html)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

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


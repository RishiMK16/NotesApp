# 📝 Notes App - CRUD Operations with MERN Stack

A simple yet functional notes application built as a learning experiment with the MERN (MongoDB, Express, React, Node.js) stack. This project demonstrates basic CRUD (Create, Read, Update, Delete) operations and serves as a practical introduction to full-stack development. 🚀

## ✨ Features

- ✏️ Create new notes with title and body
- 👀 View all notes in a responsive grid layout
- 🔄 Update existing notes
- 🗑️ Delete notes
- ⚡ Real-time UI updates
- 🛡️ Error handling and loading states

## 🛠️ Tech Stack

- 🎨 **Frontend**: React
- 🔧 **Backend**: Node.js, Express
- 💾 **Database**: MongoDB
- 🎯 **Styling**: Custom inline styles for clean, modern UI

## 🚀 Project Setup

### 📡 Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file and add your MongoDB connection string:
```
MONGO_URI=your_mongodb_connection_string
```

4. Start the server:
```bash
npm start
```

The backend server will run on `http://localhost:3000` 🚀

### 🎨 Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The frontend will run on `http://localhost:3001` 🌐

## 📚 Learning Outcomes

This project covers several fundamental concepts:
- 🏗️ Building RESTful APIs with Express
- 🔄 Managing state in React applications
- 📊 Working with MongoDB database
- ⚙️ Implementing CRUD operations
- 🛡️ Error handling and form validation
- 📱 Responsive design principles
- 🔌 Frontend-backend integration

## 📁 Project Structure

```
/
├── backend/
│   ├── models/
│   │   └── Note.js
│   ├── routes/
│   │   └── notes.js
│   └── server.js
└── frontend/
    ├── src/
    │   ├── App.js
    │   └── index.js
    └── public/
```

# 🚀 Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## ⚡ Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. 🔥\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes. ✨\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode. 🧪\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder. 🏗️\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed! 🚀

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

⚠️ **Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## 📚 Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

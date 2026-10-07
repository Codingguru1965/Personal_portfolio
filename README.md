# 🌐 Ankit Yadav — Full Stack Developer Portfolio

A clean, professional, and responsive **Full Stack Developer Portfolio** built with **React.js, Node.js, Express.js, and MongoDB**.

Designed with genuine content, dual theme support (Light & Dark mode with persistent state), organized skill sets, real-world projects, apprenticeship experience, and a dedicated backend-powered Contact API.

---

## 🚀 Live Demo & Links

* 🌐 **Live Portfolio:** [https://codingguru1965.github.io/Personal_portfolio/](https://codingguru1965.github.io/Personal_portfolio/)
* 💼 **LinkedIn:** [https://www.linkedin.com/in/ankit-yadav-814833351/](https://www.linkedin.com/in/ankit-yadav-814833351/)
* 🐙 **GitHub Profile:** [https://github.com/Codingguru1965](https://github.com/Codingguru1965)

---

## 🎨 Design & Features

- 🌓 **Dual Theme System**: Seamless Light Mode (#FFFFFF default) and Dark Mode (#111827) with persistent `localStorage` selection.
- 💊 **Floating Pill Navbar**: Clean capsule navigation bar with brand monogram, title, subtitle, and an iOS-style theme switch toggle.
- 📏 **Unified Width Alignment**: Section contents (Hero, About, Skills, Experience, Projects, Education, Contact) are strictly aligned to the exact boundary width of the navbar (`1180px`), ensuring content never bleeds outside the navbar on scroll.
- 📱 **Fully Responsive**: Optimized for Mobile, Tablet, Laptop, and Desktop screens with zero horizontal overflow.
- 👨‍💻 **Professional Hero**: Genuine introduction, quick resume download, and direct project navigation.
- 📖 **Concise About Section**: Highlights Computer Science degree and MERN stack focus without exaggerated claims.
- 🛠️ **Categorized Skills**: Categorized into Frontend, Backend, Database, and Tools without artificial skill bars.
- 💼 **Apprenticeship Experience**: Realistic responsibilities from the MERN Stack Developer Apprenticeship at Techpile Technology Pvt. Ltd., Lucknow.
- 📂 **Featured Projects**: Real projects including **GrandLuxe Hotel Management System**, published **coding-validation-hook-form** NPM package, **RecruiteX** (Full Stack Job Portal), and **WildGuard** (Wildlife Conservation SPA).
- 🎓 **Genuine Education**: B.Tech in Computer Science & Engineering (AKTU) and Class XII (UP Board).
- ✉️ **Backend Contact Form**: Exclusively powers the contact system with server-side validation and MongoDB message storage.

---

## 📁 Project Architecture

```text
portfolio_modern/
├── frontend/
│   ├── public/
│   │   ├── projects/
│   │   │   ├── hotel-management.svg  # GrandLuxe Hotel Management preview graphic
│   │   │   ├── npm-package.svg       # NPM Package preview graphic
│   │   │   ├── recruitex.svg         # RecruiteX preview graphic
│   │   └── wildguard.svg             # WildGuard preview graphic
│   │   ├── back_image.png            # Professional portrait
│   │   ├── modern_resume.pdf         # Resume PDF
│   │   └── favicon.svg
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx            # Floating pill navbar with theme switch
│   │   │   ├── Hero.jsx              # Hero introduction
│   │   │   ├── About.jsx             # Genuine background & education summary
│   │   │   ├── Skills.jsx            # Categorized technical stack
│   │   │   ├── Experience.jsx        # Apprenticeship role & responsibilities
│   │   │   ├── Projects.jsx          # Project showcase with real links
│   │   │   ├── Education.jsx         # Academic qualifications
│   │   │   ├── Contact.jsx           # Validated contact form connected to API
│   │   │   └── Footer.jsx            # Clean footer with quick navigation
│   │   ├── context/
│   │   │   ├── ThemeContext.js       # React Theme Context
│   │   │   ├── ThemeProvider.jsx     # Theme state provider with localStorage
│   │   │   └── useTheme.js           # useTheme custom hook
│   │   ├── App.css                   # Theme-driven responsive styles & container alignments
│   │   ├── App.jsx                   # Main layout container
│   │   ├── index.css                 # Base theme variables & reset
│   │   └── main.jsx                  # React application entry point
│   ├── eslint.config.js              # ESLint configuration
│   ├── index.html                    # Root HTML document
│   ├── package.json                  # Frontend dependencies
│   └── vite.config.js                # Vite build & base path configuration
│
├── backend/
│   ├── config/
│   │   └── db.js                     # MongoDB connection logic
│   ├── controllers/
│   │   └── contactController.js      # Validation and Contact submission controller
│   ├── models/
│   │   └── Contact.js                # Mongoose Contact model
│   ├── routes/
│   │   └── contactRoutes.js          # Contact API route definitions
│   ├── .env                          # Local environment variables (gitignored)
│   ├── .env.example                  # Example environment configuration
│   ├── .gitignore                    # Backend ignore rules
│   ├── package.json                  # Backend dependencies (express, mongoose, cors, dotenv)
│   └── server.js                     # Express server entry point
│
├── .gitignore
├── package.json                      # Root workspace scripts
└── README.md
```

---

## ⚙️ Environment Variables

### Backend (`backend/.env`)

Create a `.env` file inside the `backend/` directory based on `backend/.env.example`:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/portfolio
CLIENT_URL=http://localhost:5173
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js** (v18 or newer recommended)
- **MongoDB** running locally (`mongodb://127.0.0.1:27017`) or a free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster.

---

### 2. Backend Setup & Run

Open a terminal window:

```bash
cd backend
npm install
npm run dev
# Or from the project root:
npm run dev:backend
```

The backend server runs on `http://localhost:5000`.  
Health check endpoint: `http://localhost:5000/api/health`

---

### 3. Frontend Setup & Run

In another terminal window:

```bash
cd frontend
npm install
npm run dev
# Or from the project root:
npm run dev:frontend
```

The frontend will start at: `http://localhost:5173/`

---

## 📡 API Reference

### Contact API
- **Endpoint:** `POST /api/contact`
- **Content-Type:** `application/json`

#### Request Body
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "message": "Hi Ankit, I would like to discuss a software engineering opportunity."
}
```

#### Responses
- **`201 Created`**: Message successfully stored in MongoDB.
- **`400 Bad Request`**: Validation failure (missing fields, invalid email format, etc.).
- **`500 Internal Server Error`**: Database or server error.
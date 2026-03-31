# 🎬 Shorts CinemaGhar

**Start Small. Dream Big.**

Shorts CinemaGhar is a platform designed to bring **filmmaking culture to campuses across India**. It connects students, filmmakers, and institutions through screenings, competitions, mentorship programs, and workshops.

This project has been migrated from a static site to a full **MERN Stack** application.

---

## 🛠 Tech Stack

* **Frontend**: React.js, React Router, Vite
* **Backend**: Node.js, Express.js
* **Database**: MongoDB (via Mongoose)
* **Email Service**: Nodemailer (SMTP)
* **Design**: Vanilla CSS with modern aesthetics

---

## 📁 Project Structure

```
ShortsCinemaGhar
│
├── frontend/             # React Frontend (Vite)
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Page views (Home, About, Submit, etc.)
│   │   └── App.jsx       # Main application routing
│   └── package.json
│
├── backend/              # Node.js Backend (Express)
│   ├── config/           # Database and Email configurations
│   ├── models/           # Mongoose schemas
│   ├── routes/           # API endpoints
│   ├── .env              # Environment variables
│   └── server.js         # Entry point
│
└── README.md
```

---

## 🚀 Getting Started

### 1. Prerequisite
- Node.js installed
- MongoDB URI (Atlas or local)
- Gmail account with **App Password** (for email notifications)

### 2. Backend Setup
1. Go to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add the following:
   ```env
   PORT=3000
   MONGO_URI=your-mongodb-uri
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-gmail-app-password
   RECEIVER_EMAIL=your-receiver-email@gmail.com
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

### 3. Frontend Setup
1. Go to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

---

## 📬 API Endpoints

- `POST /api/contact`: Saves a contact inquiry and sends an email notification.
- `POST /api/submit`: Saves a film submission and sends an email notification.

---

## 🤝 Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

---

## 📬 Contact

📧 Email: [info@shortfilmtour.in](mailto:info@shortfilmtour.in)
🌐 Website: [https://shorts-cinema-ghar.vercel.app/](https://shorts-cinema-ghar.vercel.app/)
📷 Instagram: @shortscinemaghar

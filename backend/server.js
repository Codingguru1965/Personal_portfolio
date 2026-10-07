import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import contactRoutes from './routes/contactRoutes.js';

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
// Enable CORS for frontend applications (supports local dev and configured origin)
const allowedOrigins = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'http://localhost:3000',
  'http://127.0.0.1:3000'
];

if (process.env.CLIENT_URL) {
  allowedOrigins.push(process.env.CLIENT_URL);
}

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, postman) or matching origins
      if (!origin || allowedOrigins.includes(origin) || process.env.NODE_ENV !== 'production') {
        callback(null, true);
      } else {
        callback(new Error('Blocked by CORS policy'));
      }
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
    credentials: true
  })
);

app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Portfolio Contact API is running smoothly'
  });
});

app.use('/api/contact', contactRoutes);

// Fallback 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found'
  });
});

// Global error handler
app.use((err, req, res, _next) => {
  console.error('[Unhandled Error]:', err.message);
  res.status(500).json({
    success: false,
    message: 'Internal server error'
  });
});

app.listen(PORT, () => {
  console.log(`[Server] Portfolio backend running on port ${PORT}`);
});

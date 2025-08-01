import express from "express";
import dotenv from "dotenv";
import { connectdb } from "./lib/db.js";
import authrouter from "./routes/auth.routes.js";
import userroutes from "./routes/user.routes.js";
import chatroutes from "./routes/chat.routes.js";
import cookieParser from "cookie-parser"; 
import cors from "cors";

dotenv.config();
const app = express();
const port = process.env.PORT;

const allowedOrigins = [
  'http://localhost:5173',
  'https://chatzy-eta.vercel.app'
];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps or curl)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));



// ✅ Middleware first
app.use(express.json());
app.use(cookieParser());

// ✅ Then routes
app.use("/auth", authrouter);
app.use("/user", userroutes);
app.use("/chat", chatroutes);

app.listen(port, () => {
  connectdb();
  console.log(`Your app listening on http://localhost:${port}`);
});

import express from "express";
import authRoutes from "./controllers/routes/authRoutes.js";
import morgan from "morgan";
import setupJWTStrategy from "./controllers/auth/index.js";
import passport from "passport";
import privateRoutes from "./controllers/routes/privateRoutes.js";
import publicRoutes from "./controllers/routes/publicRoutes.js";
import cors from "cors";
// creating a server
export default async function createServer() {
  const app = express();

  app.use(express.json());
  app.use('/images', express.static('uploads/images'));
  app.use(cors());
  setupJWTStrategy(passport);

  app.use("/auth", morgan("tiny"), authRoutes);
  app.use("/", morgan("tiny"), privateRoutes);
  app.use("/", morgan("tiny"), publicRoutes);

  return app;
}

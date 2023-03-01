import express from "express";
import authRoutes from "./controllers/routes/authRoutes.js";
import morgan from "morgan";
import setupJWTStrategy from "./controllers/auth/index.js";
import passport from "passport";
import privateRoutes from "./controllers/routes/privateRoutes.js";
// creating a server
export default async function createServer() {
  const app = express();

  app.use(express.json());
  setupJWTStrategy(passport);

  app.use("/auth", morgan("tiny"), authRoutes);
  app.use("/", morgan("tiny"), privateRoutes);

  return app;
}

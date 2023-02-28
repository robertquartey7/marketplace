import express from "express";
import authRoutes from "./controllers/auth/index.js";
import morgan from "morgan";
import passport from "passport";
import setupJWTStrategy from "./controllers/auth/index.js";
// creating a server
export default async function createServer() {
  const app = express();

  app.use(express.json());
  setupJWTStrategy(passport);
  app.use("auth", morgan("tiny"), authRoutes);

  return app;
}

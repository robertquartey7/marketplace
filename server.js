import express from "express";
import authRoutes from "./controllers/auth/index.js";
import morgan from "morgan";
// creating a server
export default async function createServer() {
  const app = express();

  app.use(express.json());
  app.use("auth", morgan("tiny"), authRoutes);

  return app;
}

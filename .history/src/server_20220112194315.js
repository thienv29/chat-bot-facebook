import express from "express";
import viewEngine from "./config/viewEngine";
import initWebRoute from "./routes/web"
import bodyPare
let app  = express();

viewEngine(app);


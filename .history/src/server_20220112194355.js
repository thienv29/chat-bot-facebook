import express from "express";
import viewEngine from "./config/viewEngine";
import initWebRoute from "./routes/web"
import bodyParser from "body-parser"

let app  = express();

viewEngine(app);

app.use(bodyParser.json);

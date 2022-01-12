import express from "express";
import viewEngine from "./config/viewEngine";
import initWebRoute from "./routes/web"
import bodyParser from "body-parser"
require("dotenv").config()

let app  = express();

viewEngine(app);

app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended: true}));
app.get('/',(req,res) => {
  res.send("cc")
})
initWebRoute(app);

let port  = process.env.PORT || 8080
app.listen(port, () => {
  console.log(" chatbot is running " + port);
})



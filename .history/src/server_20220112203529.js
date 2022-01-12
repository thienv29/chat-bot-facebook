import express from "express";
import viewEngine from "./config/viewEngine";
import initWebRoute from "./routes/web"
import bodyParser from "body-parser"
import dotenv from "dotenv"

dotenv.config()

let app  = express();

viewEngine(app);

app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended: true}));
app.get('/',(req,res) => {
  res.send("cc")
})

let port  = process.env.PORT || 8080
app.listen(port, () => {
  console.log(" chatbot is running " + port);
})



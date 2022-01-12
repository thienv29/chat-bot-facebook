import express from "express";
import chatbotController from "../controllers/chatbotController.js"
let router =express.Router();

let initWebRoute  = (app) => {
  router.get("/", )
  return app.use("/",router)
}

module.exports = initWebRoute
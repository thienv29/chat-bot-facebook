import express from "express";
import chatbotController from "../controllers/chatbotController"
let router =express.Router();

let initWebRoute  = (app) => {
  router.get("/", chatbotController.getHomePage)
  router.post("webhook",chatbotController.)
  return app.use("/",router)
}

module.exports = initWebRoute
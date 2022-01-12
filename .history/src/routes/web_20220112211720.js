import express from "express";
import chatbotController from "../controllers/chatbotController"
let router =express.Router();

let initWebRoute  = (app) => {
  router.get("/", chatbotController.getHomePage)
  router.get("/webhook",chatbotController.getWebhook)
  router.post("/webhook", chatbotController.postWebhook)
  return app.use("/",router)
}

module.exports = initWebRoute
import express from "express";

let router =express.Router();

let initWebRoute  = (app) => {
  router.get("/", chat)
  return app.use("/",router)
}

module.exports = initWebRoute
import express from "express";

let router =express.Router();

let initWebRoute  = (app) => {
  router.get('/',(req,res) => {
    res.send("hello world")
  })
  return app.use("/",router)
}

module.
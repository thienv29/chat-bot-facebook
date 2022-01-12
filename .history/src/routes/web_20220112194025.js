import express from "express";
import { route } from "express/lib/application";
import { append } from "express/lib/response";
let router =express.Router();
let initWebRoute  = (app) => {
  router.get('/',(req,res) => {
    res.send("hello world")
  })
  return app.use("/",route)
}
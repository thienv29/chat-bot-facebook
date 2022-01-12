import express from "express";
import { append } from "express/lib/response";
let router =express.Router();
let initWebRoute  = () => {
  router.get('/',(req,res) => {
    res.send("hello world")
  })
  return ap
}
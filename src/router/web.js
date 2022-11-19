import express from "express";
import homeController from "../controller/homeController";
import getHomePage from "../controller/homeController"

let router = express.Router();

const initWebRoute = (app) => {
  router.get("/news",(req, res) => {
    // res.send('Hello World') 
  });
  router.get("/", homeController.getHomePage());

  return app.use("/", router);
};

export default initWebRoute;

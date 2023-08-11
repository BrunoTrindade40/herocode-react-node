import express, { Application } from "express";
import { connect } from "./infra/database";
import { errorMiddlewares } from "./middlewares/error.middlewares";

class App {
  public app: Application;
  constructor() {
    this.app = express()
    this.middlewaresInitialize();
    this.initializeRoutes();
    this.interceptionErrors();
    connect();
  }
  initializeRoutes() {
    /* this.app.use('/',) */
  }
  interceptionErrors() {
    errorMiddlewares
  }
  middlewaresInitialize() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }
  listen() {
    this.app.listen(3333, () => console.log('Server is running'))
  }
}

export { App };


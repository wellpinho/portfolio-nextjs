import { Router } from "express";
import { list } from "./AboutController";

const routesAbout = Router();

routesAbout.get('/about', list)

export { routesAbout }
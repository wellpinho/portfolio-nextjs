import { Request, Response, Router } from "express";
import { app } from "./app";
import { routesAbout } from "./components/about/about.routes";

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
  return response.json('Welcome')
})

routes.use(routesAbout)

export { routes }
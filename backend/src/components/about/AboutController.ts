import { Request, Response } from "express";
import { listService } from "./AboutService";

const list = async (request: Request, response: Response) => {
  const { title, description, cv, slug } = request.body
  const list = await listService({ title, description, cv, slug })

  return response.json(list)
}

export { list }
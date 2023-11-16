import { Request, Response } from "express";
import { CreateProcedureService } from "../../services/procedure/CreateProcedureService";

export class CreateProcedureController {
  async handle(request: Request, response: Response) {
    const { name, price } = request.body;
    const user_id = request.user_id;

    const createProcedureService = new CreateProcedureService();

    const procedure = await createProcedureService.execute({
      user_id,
      name,
      price,
    });

    return response.json(procedure);
  }
}

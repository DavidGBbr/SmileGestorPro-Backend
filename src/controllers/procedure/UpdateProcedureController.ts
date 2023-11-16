import { Request, Response } from "express";
import { UpdateProcedureService } from "../../services/procedure/UpdateProcedureService";

export class UpdateProcedureController {
  async handle(request: Request, response: Response) {
    const user_id = request.user_id;
    const { name, price, status, procedure_id } = request.body;

    const updateProcedure = new UpdateProcedureService();

    const procedure = await updateProcedure.execute({
      user_id,
      name,
      price,
      status,
      procedure_id,
    });

    return response.json(procedure);
  }
}

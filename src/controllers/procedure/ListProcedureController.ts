import { Request, Response } from "express";
import { ListProcedureService } from "../../services/procedure/ListProcedureService";

export class ListProcedureController {
  async handle(request: Request, response: Response) {
    const user_id = request.user_id;
    const status = request.query.status as string;

    const listProcedures = new ListProcedureService();

    const procedures = await listProcedures.execute({ user_id, status });

    return response.json(procedures);
  }
}

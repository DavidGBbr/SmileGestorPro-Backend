import { Request, Response } from "express";
import { CountProcedureService } from "../../services/procedure/CountProcedureService";

export class CountProcedureController {
  async handle(request: Request, response: Response) {
    const user_id = request.user_id;

    const countProcedures = new CountProcedureService();

    const count = await countProcedures.execute({ user_id });

    return response.json({ count });
  }
}

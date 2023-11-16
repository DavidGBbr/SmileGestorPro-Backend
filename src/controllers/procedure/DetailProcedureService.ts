import { Request, Response } from "express";
import { DetailProcedureService } from "../../services/procedure/DetailProcedureService";

export class DetailProcedureController {
  async handle(request: Request, response: Response) {
    const procedure_id = request.query.procedure_id as string;

    const detailProcedure = new DetailProcedureService();

    const detail = await detailProcedure.execute({ procedure_id });

    response.json(detail);
  }
}

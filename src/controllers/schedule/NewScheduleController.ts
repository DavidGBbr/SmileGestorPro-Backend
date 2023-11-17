import { Request, Response } from "express";
import { NewScheduleService } from "../../services/schedule/NewScheduleService";

export class NewScheduleController {
  async handle(request: Request, response: Response) {
    const { procedure_id, customer, date } = request.body;
    const user_id = request.user_id;

    const newSchedule = new NewScheduleService();

    const schedule = await newSchedule.execute({
      user_id,
      procedure_id,
      customer,
      date,
    });

    return response.json(schedule);
  }
}

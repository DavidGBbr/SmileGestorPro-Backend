import prismaClient from "../../prisma";

interface NewScheduleRequest {
  user_id: string;
  procedure_id: string;
  customer: string;
  date: string;
}

export class NewScheduleService {
  async execute({ user_id, procedure_id, customer, date }: NewScheduleRequest) {
    if (procedure_id === "" || customer === "" || date === "") {
      throw new Error("Error schedule new service.");
    }

    const schedule = await prismaClient.service.create({
      data: {
        user_id: user_id,
        procedure_id: procedure_id,
        customer: customer,
        date: date,
      },
    });

    return schedule;
  }
}

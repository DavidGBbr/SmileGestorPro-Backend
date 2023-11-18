import prismaClient from "../../prisma";

interface FinishScheduleRequest {
  user_id: string;
  schedule_id: string;
}

export class FinishScheduleService {
  async execute({ user_id, schedule_id }: FinishScheduleRequest) {
    if (user_id === "" || schedule_id === "") {
      throw new Error("Error.");
    }

    try {
      const belongsToUser = await prismaClient.service.findFirst({
        where: {
          id: schedule_id,
          user_id: user_id,
        },
      });

      if (!belongsToUser) {
        throw new Error("Not Authorized");
      }

      await prismaClient.service.delete({
        where: {
          id: schedule_id,
        },
      });

      return { message: "Finalizado com sucesso!" };
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
}

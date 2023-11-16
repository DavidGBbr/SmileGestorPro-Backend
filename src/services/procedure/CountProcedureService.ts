import prismaClient from "../../prisma";

interface CountRequest {
  user_id: string;
}

export class CountProcedureService {
  async execute({ user_id }: CountRequest) {
    const count = await prismaClient.procedure.count({
      where: {
        user_id: user_id,
      },
    });

    return count;
  }
}

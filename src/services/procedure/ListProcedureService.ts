import prismaClient from "../../prisma";

interface ProcedureRequest {
  user_id: string;
  status: boolean | string;
}

export class ListProcedureService {
  async execute({ user_id, status }: ProcedureRequest) {
    const procedure = await prismaClient.procedure.findMany({
      where: {
        user_id: user_id,
        status: status === "true" ? true : false,
      },
    });

    return procedure;
  }
}

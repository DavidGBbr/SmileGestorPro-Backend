import prismaClient from "../../prisma";

interface DetailRequest {
  procedure_id: string;
}

export class DetailProcedureService {
  async execute({ procedure_id }: DetailRequest) {
    const procedure = await prismaClient.procedure.findFirst({
      where: {
        id: procedure_id,
      },
    });

    return procedure;
  }
}

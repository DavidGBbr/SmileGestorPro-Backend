import prismaClient from "../../prisma";

interface ProcedureRequest {
  user_id: string;
  procedure_id: string;
  name: string;
  price: number;
  status: boolean | string;
}

export class UpdateProcedureService {
  async execute({
    user_id,
    procedure_id,
    name,
    price,
    status = true,
  }: ProcedureRequest) {
    const user = await prismaClient.user.findFirst({
      where: {
        id: user_id,
      },
      include: {
        subscriptions: true,
      },
    });

    if (user?.subscriptions?.status !== "active") {
      throw new Error("Not Authorized");
    }

    const procedure = await prismaClient.procedure.update({
      where: { id: procedure_id },
      data: {
        name: name,
        price: price,
        status: status === true ? true : false,
      },
    });

    return procedure;
  }
}

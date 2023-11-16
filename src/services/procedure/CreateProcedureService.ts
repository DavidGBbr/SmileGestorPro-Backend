import prismaClient from "../../prisma";

interface ProcedureRequest {
  user_id: string;
  name: string;
  price: number;
}

export class CreateProcedureService {
  async execute({ user_id, name, price }: ProcedureRequest) {
    if (!name || !price) {
      throw new Error("Invalid");
    }

    const myProcedures = await prismaClient.procedure.count({
      where: { user_id: user_id },
    });

    const user = await prismaClient.user.findFirst({
      where: { id: user_id },
      include: { subscriptions: true },
    });

    if (myProcedures >= 5 && user?.subscriptions?.status !== "active") {
      throw new Error("Not authorized");
    }

    const procedure = await prismaClient.procedure.create({
      data: {
        name: name,
        price: price,
        user_id: user_id,
      },
    });

    return procedure;
  }
}

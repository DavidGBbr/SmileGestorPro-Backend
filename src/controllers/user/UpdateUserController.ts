import { Request, Response } from "express";
import { UpdateUserService } from "../../services/user/UpdateUserService";

export class UpdateUserController {
  async handle(request: Request, response: Response) {
    const { name, address } = request.body;
    const user_id = request.user_id;

    const updateUser = new UpdateUserService();

    const user = await updateUser.execute({ user_id, name, address });

    return response.json(user);
  }
}

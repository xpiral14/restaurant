import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";

export default class UsersController {
  public async index(ctx: HttpContextContract) {
    const users = await User.all();

    return ctx.response.json(users);
  }

  public async show(ctx: HttpContextContract) {
    const user = await User.find(ctx.params.id);

    return ctx.response.json(user);
  }
}

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

  public async store(ctx: HttpContextContract) {
    const user = await User.create(ctx.request.all());

    return ctx.response.json(user);
  }

  public async update(ctx: HttpContextContract) {
    let user = await User.find(ctx.params.id);
    const body = ctx.request.all();
    if (!user) {
      return ctx.response.status(400).json("usuário não encontrado");
    }
    user.name = body.name;
    user.username = body.username;
    user.email = body.email;

    await user.save();
    await user.refresh();

    return ctx.response.json(user);
  }
  
  public async destroy(ctx: HttpContextContract) {
    let user = await User.findOrFail(ctx.params.id);
    
    await user.delete()
    
    return ctx.response.status(204).json("");
  }
}
